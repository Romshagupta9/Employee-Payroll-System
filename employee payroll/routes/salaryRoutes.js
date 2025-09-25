import express from 'express';
import { createOrUpdateSalary, getSalaryByEmployee } from '../controllers/salaryController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, authorize('admin'), createOrUpdateSalary);
router.get('/:employeeId', protect, getSalaryByEmployee);

export default router;
