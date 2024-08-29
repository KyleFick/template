import type { NextApiRequest, NextApiResponse } from 'next';
import { getConnection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      const pool = await getConnection();
      await pool.request()
        .input('id', sql.Int, id)
        .query('DELETE FROM YourTableName WHERE id = @id');
      
      res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting record', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
