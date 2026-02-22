let employees = [
    {name: "Brianna", hourlyRate: 24, hoursWorked: 34},
    {name: "Silvee", hourlyRate: 24, hoursWorked: 18},
    {name: "Zena", hourlyRate: 45, hoursWorked: 40},
    {name: "Yacoub", hourlyRate: 30, hoursWorked: 52},
    {name: "Georges", hourlyRate: 50, hoursWorked: 65}
];

function calculatedBasePay(rate, hours) {
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