import express from 'express';
import { submitMood, getMoods } from '../controllers/moodController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
router.post('/', verifyToken, submitMood);
router.get('/', verifyToken, getMoods);

export default router;