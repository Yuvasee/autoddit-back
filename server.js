import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.load({ path: '.env.dev' });
const PORT = process.env.PORT;

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => console.log('DB connection ok'))
mongoose.connect(process.env.MONGO_URI);

app.get('/api/v1/test', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'test',
    payload: {}
  })
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
});
