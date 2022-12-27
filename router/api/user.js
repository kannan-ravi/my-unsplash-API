import express from 'express';
import userController from '../../controller/userController.js';
const router = express.Router();


router.route('/')
  .get(userController.getUsers)

export default router