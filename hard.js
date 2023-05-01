var tomMass = 8;
var tomHeight = 9
var jerryMass = 45;
var jerryHeight = 10;

let bmi1 = (tomMass / (tomHeight * tomHeight))
let bmi2 = (jerryMass / (jerryHeight * jerryHeight))
let tomHigherBMI = (bmi1 > bmi2);
let jerryHigherBMI2x = (bmi2 > bmi1);

console.log(`Tom BMI ${bmi1}`);
console.log(`Jerry BMI ${bmi2}`);
console.log(`Is Toms BMI higher than Jerry? ${tomHigherBMI}`);
console.log(`Is Jerrys BMI higher than Toms? ${jerryHigherBMI2x}`);



