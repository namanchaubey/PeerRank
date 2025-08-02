import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import codeRoutes from './routes/codeRoutes.js';

dotenv.config();

console.log("MONGO_URI is:", process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/code', codeRoutes);//

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));/////
