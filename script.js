// Task Nr1
let string = "Labas";
let number = 32;
let boolean = true;

console.log(string, number, boolean);

// Task Nr2
let age = 18;
let isCitizen = true;
let isResidentForDays = 33;

if(age >= 18 && isCitizen && isResidentForDays >= 30) {
    console.log("You're allowed to vote");
} else if(age < 18 && isCitizen && isResidentForDays < 30 ) {
    console.log("You're allowed to vote");
} else if(!isCitizen){
    console.log("You're not allowed to vote");
} else {
    console.log("You're not allowed to vote");
}

// Task Nr3
let age1 = 35;
let bmi = 50;
let smoke = true;


if(age1 < 30 && bmi < 25 && !smoke) {
    console.log("Low risk");
} else if(age1 > 30 && age1 <= 50 && bmi > 25 && bmi < 30 && !smoke) {
    console.log('Medium risk')
} else if ((age1 > 50 || bmi >= 30 || smoke) && (age1 > 50 && bmi >= 30 && !smokes)) {
    console.log('High risk')
} else if (age1 > 50 && bmi >= 30 && smoke) {
    console.log('Very high risk')
} 


