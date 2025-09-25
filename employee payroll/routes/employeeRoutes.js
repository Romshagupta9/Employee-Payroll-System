import express from 'express';
import {
  createEmployee, listEmployees, getEmployee, updateEmployee, deleteEmployee
} from '../controllers/employeeController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// admin-only CRUD for employees
router.use(protect, authorize('admin'));

router.post('/', createEmployee);
router.get('/', listEmployees);
router.get('/:id', getEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
