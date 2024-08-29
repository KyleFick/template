import type { NextApiRequest, NextApiResponse } from 'next';
import { getConnection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, name, description } = req.body;

    try {
      const pool = await getConnection();
      await pool.request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .input('description', sql.VarChar, description)
        .query('UPDATE YourTableName SET name = @name, description = @description WHERE id = @id');
      
      res.status(200).json({ message: 'Record updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating record', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
