// api/proxy.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const { data } = await axios.get(req.query.url);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};
