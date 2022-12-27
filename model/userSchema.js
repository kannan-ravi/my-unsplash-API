import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userShema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('User', userShema);

export default userModel