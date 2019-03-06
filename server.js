import express from 'express';

const PORT = 5000;

const app = express();

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
