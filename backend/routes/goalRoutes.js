import express from 'express';
import {deleteGoals, getGoals, setGoals, updateGoals} from '../controllers/goalController.js'
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.route('/').get(protect,getGoals).post(protect,setGoals);
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals);


   export default router;
