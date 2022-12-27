import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import mongoose from 'mongoose';
import connectDB from './config/dbConnection.js';
import errorHandler from './controller/errorHandler.js';
import rootRoute from './router/root.js';
import registerRoute from './router/register.js';
import authRoute from './router/auth.js';
import userRoute from './router/api/user.js';
import imageRoute from './router/api/image.js';
const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/', rootRoute)
app.use('/api/image', imageRoute)

app.use('/register', registerRoute)
app.use('/auth', authRoute)
app.use('/users', userRoute)


app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server run in the http://localhost:${PORT}`);
  })
})
