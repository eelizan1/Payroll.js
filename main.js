var rate = 15;
var overTimeRate = rate * 1.5;
var standardHours = 40;
var standardHourPay = standardHours * rate;

// object employee 
function employee(name, pay, hours) {
    this.name = name;
    this.pay = pay;
    this.hours = hours;
}

var johnshours = prompt("What is johns hours?");

if (johnshours > 40) {
    var johnsFinalPay = overtime(johnshours);
    var johnsfinalHours = overTimeHours(johnshours);
    var john = new employee('John', johnsFinalPay, johnsfinalHours);
} else {
    var regHours = johnshours * rate;
    var john = new employee('John', regHours, johnshours);
}

var sarahhours = prompt("What is sarahs hours?");

if (sarahhours > 40) {
    var sarahsFinalPay = overtime(sarahhours);
    var sarahsFinalHours = overTimeHours(sarahhours);
    var sarah = new employee('Sarah', sarahsFinalPay, sarahsFinalHours);
} else {
    var regHours = sarahhours * rate;
    var sarah = new employee('Sarah', regHours, sarahhours);
}


var mikeshours = prompt("What is mikes hours?");


switch (true) {

case (mikeshours > 40):
    var mikesFinalPay = overtime(mikeshours);
    var mikesFinalHours = overTimeHours(mikeshours);
    var mike = new employee('Mike', mikesFinalPay, mikesFinalHours);
    break;
case (mikeshours <= 40):
    var regHours = mikeshours * rate;
    var mike = new employee('mike', regHours, mikeshours);
    break;
case -1:
    console.log("end");
    break;
default:
    console.log("no employee sepcified");
    break;
}

console.log(john);
console.log(sarah);
console.log(mike);


// takes in employee hours 
function overtime(employeeHours) {
    // get extra hours 
    var overtimeHours = employeeHours - 40;
    // computer over time pay 
    var overtimePay = overtimeHours * overTimeRate;
    // return final pay with over time pay 
    var finalPay = standardHourPay + overtimePay;

    return finalPay;
}

function overTimeHours(employeeHours) {
    var overtimeHours = employeeHours - 40;
    return overtimeHours + standardHours;
}