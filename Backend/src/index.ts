import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as eventRoutes } from './routes/events.js';
import { router as reviewRoutes } from './routes/reviews.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});