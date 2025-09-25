const parse = (val, fallback = 0) => {
  if (val === undefined || val === null) return fallback;
  const n = Number(val);
  return Number.isFinite(n) ? n : fallback;
};

export function calculatePayroll(salaryStructure, otherDeductions = 0) {
  const basic = parse(salaryStructure.basic);
  const hra = parse(salaryStructure.hra);
  const allowances = parse(salaryStructure.allowances);
  const bonuses = parse(salaryStructure.bonuses);
  const otherEarnings = parse(salaryStructure.otherEarnings);

  // Gross pay 
  const grossPay = basic + hra + allowances + bonuses + otherEarnings;

  // Read rates from env
  const incomeTaxRate = parse(process.env.INCOME_TAX_RATE, 0.10); 
  const tdsRate = parse(process.env.TDS_RATE, 0.02); 
  const professionalTax = parse(process.env.PROFESSIONAL_TAX, 0); 
  const pfEmployeeRate = parse(process.env.PF_EMPLOYEE_RATE, 0.12); 
  const pfEmployerRate = parse(process.env.PF_EMPLOYER_RATE, 0.12); 
  

  const incomeTax = +(grossPay * incomeTaxRate).toFixed(2);
  const tds = +(grossPay * tdsRate).toFixed(2);
  const pfEmployee = +(basic * pfEmployeeRate).toFixed(2); 
  const pfEmployer = +(basic * pfEmployerRate).toFixed(2);

  const totalDeductions = +(incomeTax + tds + professionalTax + pfEmployee + otherDeductions).toFixed(2);
  const netPay = +(grossPay - totalDeductions).toFixed(2);

  return {
    grossPay,
    deductions: {
      incomeTax,
      tds,
      professionalTax,
      pfEmployee,
      pfEmployer,
      otherDeductions: +otherDeductions
    },
    totalDeductions,
    netPay
  };
}
