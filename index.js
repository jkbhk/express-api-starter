import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('API server running.');
});



app.listen(port, () =>
  console.log(`API server listening on port ${port}`),
);