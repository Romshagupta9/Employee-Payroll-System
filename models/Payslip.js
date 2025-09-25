import mongoose from 'mongoose';

const payslipSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month: { type: String, required: true }, // format: YYYY-MM
  grossPay: { type: Number, required: true },
  deductions: {
    incomeTax: { type: Number, default: 0 },
    tds: { type: Number, default: 0 },
    professionalTax: { type: Number, default: 0 },
    pfEmployee: { type: Number, default: 0 },
    pfEmployer: { type: Number, default: 0 },
    otherDeductions: { type: Number, default: 0 }
  },
  totalDeductions: { type: Number, default: 0 },
  netPay: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('Payslip', payslipSchema);
