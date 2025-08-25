import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import moodRoutes from './routes/moodRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/moods', moodRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((err) => console.error(err));