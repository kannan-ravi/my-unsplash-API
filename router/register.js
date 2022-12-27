import express from 'express';
import handleNewUser from '../controller/registerController.js';
const router = express.Router();

router.route('/')
  .post(handleNewUser)


export default router