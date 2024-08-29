import type { NextApiRequest, NextApiResponse } from "next";
import { getConnection } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { name, description } = req.body;
  
      try {
        const pool = await getConnection();
        await pool.request()
          .input('name', sql.VarChar, name)
          .input('description', sql.VarChar, description)
          .query('INSERT INTO YourTableName (name, description) VALUES (@name, @description)');
        
        res.status(201).json({ message: 'Record created successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error creating record', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  