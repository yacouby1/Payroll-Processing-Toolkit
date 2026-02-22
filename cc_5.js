let employees = [
    {name: "Brianna", hourlyRate: 24, hoursWorked: 34},
    {name: "Silvee", hourlyRate: 24, hoursWorked: 18},
    {name: "Zena", hourlyRate: 45, hoursWorked: 40},
    {name: "Yacoub", hourlyRate: 30, hoursWorked: 52},
    {name: "Georges", hourlyRate: 50, hoursWorked: 65}
];

function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return rate * 40;
    } else {
        return rate * hours;
    }
}

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;

    } else {
        return 0;
    }
}

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;

    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay

    };
}

for (let i = 0; i < employees.length; i++) {
    let payroll = processPayroll(employees[i]);
    console.log(payroll);
}
