// Load environment variables
import 'dotenv/config'; // This automatically loads .env

import { sql } from '@vercel/postgres';

async function seed() {
  try {
    console.log("Seeding database...");

    // Example: create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      )
    `;

    // Insert sample user
    await sql`INSERT INTO users (name, email) VALUES ('Test User', 'test@example.com')`;

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    process.exit();
  }
}

seed();
