// Constants for tax rates
const taxBrackets = [
    { min: 0, max: 24000, rate: 10.0 },
    { min: 24001, max: 32333, rate: 25.0 },
    { min: 32334, max: 500000, rate: 30.0 },
    { min: 500001, max: 800000, rate: 32.5 },
    { min: 800001, max: Number.POSITIVE_INFINITY, rate: 35.0 }
];

// Constants for other allowances and deductions
const personalRelief = 2400;
const insuranceRelief = 5000;
const pensionFundContribution = 20000;
const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    // Add more NHIF rates here
];
const nssfRates = [
    { tier: 1, min: 0, max: 6000, employee: 0.06, employer: 0.06 },
    { tier: 2, min: 6001, max: 18000, employee: 0.06, employer: 0.06 }
];

// Function to calculate tax
function calculateTax(annualSalary) {
    let tax = 0;
    for (const bracket of taxBrackets) {
        if (annualSalary > bracket.min) {
            const taxableAmount = Math.min(annualSalary, bracket.max) - bracket.min;
            tax += taxableAmount * (bracket.rate / 100);
        }
    }
    return tax;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const annualSalary = (basicSalary + benefits) * 12;
    const tax = calculateTax(annualSalary);
    const nssf = calculateNSSF(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    
    const grossSalary = annualSalary - tax - nssf - nhif;
    const netSalary = grossSalary / 12;
    return netSalary;
}

// Function to calculate NSSF
function calculateNSSF(basicSalary) {
    let totalNSSF = 0;
    for (const rate of nssfRates) {
        if (basicSalary >= rate.min) {
            totalNSSF = (rate.employee + rate.employer) * basicSalary;
            break;
        }
    }
    return totalNSSF;
}

// Function to calculate NHIF
function calculateNHIF(basicSalary) {
    let nhif = 0;
    for (const rate of nhifRates) {
        if (basicSalary >= rate.min && basicSalary <= rate.max) {
            nhif = rate.deduction;
            break;
        }
    }
    return nhif;
}
