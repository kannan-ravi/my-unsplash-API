import express from 'express';
import imageController from '../../controller/imageController.js';
import authController from  '../../controller/authController.js';

const router = express.Router();

router.route('/')
  .get(imageController.getAllImages)
  .post(imageController.newImage)
  .delete(imageController.deleteImage)


export default router