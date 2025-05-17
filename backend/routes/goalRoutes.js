import express from 'express';
import {deleteGoals, getGoals, setGoals, updateGoals} from '../controllers/goalController.js'
const router = express.Router();

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);


   export default router;
