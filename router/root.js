import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Please go to the correct api route');
})

export default router