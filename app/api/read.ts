import type { NextApiRequest, NextApiResponse } from 'next';
import { getConnection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const pool = await getConnection();
      const result = await pool.request().query('SELECT * FROM YourTableName');
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching records', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
