import express from 'express';
import {getMe, loginUser, registerUser} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
const router=express.Router();

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect,getMe);



export default router;