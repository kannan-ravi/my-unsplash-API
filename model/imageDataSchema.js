import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageDataSchema = new Schema({
  label: {
    type: String,
    required: true 
  },
  photoURL: {
    type: String,
    required: true
  }
})

const imageDataModel = mongoose.model('ImageData', imageDataSchema);

export default imageDataModel