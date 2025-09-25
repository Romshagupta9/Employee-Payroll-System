import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  basic: { type: Number, default: 0 },
  hra: { type: Number, default: 0 },
  allowances: { type: Number, default: 0 },
  bonuses: { type: Number, default: 0 },
  otherEarnings: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('SalaryStructure', salarySchema);
