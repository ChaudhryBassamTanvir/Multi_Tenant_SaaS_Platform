import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

async function seed() {
  console.log('Seeding database...');

  const hashedPassword = await bcrypt.hash('password123', 10);

  await sql`
    INSERT INTO users2 (name, email, password, isoauth)
    VALUES
    ('Test User', 'test@nimbus.com', ${hashedPassword}, false),
    ('Admin User', 'admin@nimbus.com', ${hashedPassword}, false)
    ON CONFLICT (email) DO NOTHING;
  `;

  console.log('Seeding complete!');
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
