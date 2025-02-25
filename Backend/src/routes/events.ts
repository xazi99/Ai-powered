import express from 'express';

export const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({ message: 'Events endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    res.json({ message: 'Create event endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});