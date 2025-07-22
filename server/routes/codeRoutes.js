import { submitCode } from '../controllers/codeController.js';
import express from 'express';
const router = express.Router();
router.post('/submit', submitCode);
export default router;
