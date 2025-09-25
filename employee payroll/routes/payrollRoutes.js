import express from 'express';
import { generatePayslip, getPayslipsForEmployee, getPayslipById } from '../controllers/payrollController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', protect, authorize('admin'), generatePayslip);
router.get('/employee/:employeeId', protect, getPayslipsForEmployee);
router.get('/:id', protect, getPayslipById);

export default router;
