const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const codeRoutes = require('./routes/codeRoutes');

dotenv.config();
console.log("MONGO_URI is:", process.env.MONGO_URI); // Debug

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/code', codeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
