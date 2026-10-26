import express from 'express';
import {connectDB} from './config/db';

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to Ayra Hospital Backend!');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})