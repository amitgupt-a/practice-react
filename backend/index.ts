import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/time', (req, res) => {
  res.json({
    message: `Hello world, time is ${new Date().toISOString()}`
  });
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});


