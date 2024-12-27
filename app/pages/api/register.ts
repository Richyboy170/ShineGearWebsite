import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

interface RegisterRequest extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}

export default async function handler(req: RegisterRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to the database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Your MySQL root password
      database: 'crazyxlearning',
    });

    // Insert the new user
    try {
      const [result] = await connection.execute<mysql.ResultSetHeader>(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hashedPassword]
      );

      const userId = result.insertId;

      res.status(200).json({ message: 'User registered successfully', userId });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
