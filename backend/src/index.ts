import express from 'express';
import {connectDB} from './config/db';

const app = express();

// Connect to the database
connectDB();

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})