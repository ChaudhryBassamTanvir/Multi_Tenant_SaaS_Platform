require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seedUsers(client) {
  console.log('Seeding users2...');

  await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS users2 (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      isoauth BOOLEAN DEFAULT false
    );
  `);

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await client.query(
      `
      INSERT INTO users2 (id, name, email, password, isoauth)
      VALUES ($1, $2, $3, $4, false)
      ON CONFLICT (id) DO NOTHING
      `,
      [user.id, user.name, user.email, hashedPassword]
    );
  }

  console.log(`✅ Seeded users2`);
}

async function seedCustomers(client) {
  console.log('Seeding customers2...');

  await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS customers2 (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      user_email TEXT
    );
  `);

  for (const customer of customers) {
    await client.query(
      `
      INSERT INTO customers2 (id, name, email, image_url, user_email)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO NOTHING
      `,
      [
        customer.id,
        customer.name,
        customer.email,
        customer.image_url,
        customer.user_email || null,
      ]
    );
  }

  console.log(`✅ Seeded customers2`);
}

async function seedInvoices(client) {
  console.log('Seeding invoices2...');

  await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS invoices2 (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `);

  for (const invoice of invoices) {
    await client.query(
      `
      INSERT INTO invoices2 (customer_id, amount, status, date)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id) DO NOTHING
      `,
      [
        invoice.customer_id,
        invoice.amount,
        invoice.status,
        invoice.date,
      ]
    );
  }

  console.log(`✅ Seeded invoices2`);
}

async function seedRevenue(client) {
  console.log('Seeding revenue...');

  await client.query(`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `);

  for (const rev of revenue) {
    await client.query(
      `
      INSERT INTO revenue (month, revenue)
      VALUES ($1, $2)
      ON CONFLICT (month) DO NOTHING
      `,
      [rev.month, rev.revenue]
    );
  }

  console.log(`✅ Seeded revenue`);
}

async function main() {
  const client = await pool.connect();

  try {
    await seedUsers(client);
    await seedCustomers(client);
    await seedInvoices(client);
    await seedRevenue(client);

    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
