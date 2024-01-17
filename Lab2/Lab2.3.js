// weight in kg
let weight = 99;

// height in m
let height = 1.52;

let bmiNumber = weight / (height * 2);

console.log("BMI is: ", bmiNumber);

//Underweight = < 18.5
//Normal weight = 18.5 – 24.9
//Overweight = 25–29.9
//Obesity = BMI of 30 or greater
let normalWeightMin = 18.5;
let overweightMin = 25;
let obesityMin = 30;
if (bmiNumber < normalWeightMin) {
    console.log("You are Underweight. You have to increase " + (normalWeightMin * height * 2 - weight) + "kg")
} else if (bmiNumber < overweightMin) {
    console.log("You have normal weight ")
} else if (bmiNumber < obesityMin) {
    console.log("You are Overweight.You have to reduce " + (weight - overweightMin * height * 2) + "kg")
} else {
    console.log("You are Obesity.You have to reduce " + (weight - overweightMin * height * 2) + "kg")
}