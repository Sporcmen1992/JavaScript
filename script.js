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
let riskLevel = "Contingent risk";
let advice = "Consult your doctor for a health assessment.";


if(age1 < 30 && bmi < 25 && !smoke) {
    riskLevel = "Low risk";
    advice = "Continue your healthy lifestyle and get regular health checks.";
} else if (age1 > 30 && age1 <= 50 && bmi > 25 && bmi < 30 && !smoke) {
    riskLevel = "Medium risk";
    advice = "Pay attention to diet and physical activity.";
} else if ((age1 > 50 || bmi >= 30 || smoke) && (age1 > 50 && bmi >= 30 && !smoke)) {
    riskLevel = "High risk";
    advice = "It is important to see your doctor regularly and make lifestyle changes."
} else if (age1 > 50 && bmi >= 30 && smoke) {
    riskLevel = "Very high risk";
    advice = "Seek professional advice on strategies to improve your health.";  
} 


console.log("Low risk");
console.log("Medium risk");
console.log("High risk");
console.log("Very high risk");

