// weight in kg
let weight = 99;

// height in m
let height = 1.52;

let bmiNumber = weight / (height * 2);

console.log("BMI is: ", bmiNumber);
let normalWeightMin = 18.5;
let overweightMin = 25;
let obesityMin = 30;
if (bmiNumber < normalWeightMin) {
    console.log("You are Underweight")
} else if (bmiNumber < overweightMin) {
    console.log("You have normal weight ")
} else if (bmiNumber < obesityMin) {
    console.log("You are Overweight")
} else {
    console.log("You are Obesity")
}

