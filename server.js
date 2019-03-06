import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import multer from 'multer';

import * as linkController from './controllers/link';

var upload = multer({ dest: 'public/' })

dotenv.load({ path: '.env.dev' });
const PORT = process.env.PORT;

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => console.log('DB connection ok'))
mongoose.connect(process.env.MONGO_URI);

app.post('/api/v1/links', upload.single('image'), linkController.postLink);

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
