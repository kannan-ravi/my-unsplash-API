import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DATABASE_URI, {
      "dbName": 'my-unsplash',
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.log(err);
  }
}

export default connectDB