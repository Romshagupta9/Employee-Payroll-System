import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  designation: { type: String },
  dateOfJoining: { type: Date },
  department: { type: String },
  // reference to salary structure
  salaryStructure: { type: mongoose.Schema.Types.ObjectId, ref: 'SalaryStructure' }
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
