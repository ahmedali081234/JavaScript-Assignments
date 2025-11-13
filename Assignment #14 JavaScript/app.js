// Chapter Name: USER INPUT & CONDITIONAL STATEMENT

// Answer # 1

// var city = prompt("Enter your city name")

// if(city=== "Karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Welcome to "+"city")
// }

// Answer # 2

// var gender = prompt("Enter Your Gender")

// if(gender==="male"){
//     alert("Good Morning Sir.")
// }
// else if (gender== "female"){
//     alert("Good Morning Ma'am.")
// }
// else{
//     alert("Invalid Gender")
// }

// Answer # 3

// var signalcolor = prompt("Traffic Signal")
// if(signalcolor==="red"){
//     alert("Must Stop")
// }
// else if (signalcolor=="yellow"){
//     alert("Ready to move")
// }
// if(signalcolor==="green"){
//     alert("Move now")
// }

// Answer # 4

// var remainfuel = + prompt("Remaining fuel in car")
// if (remainfuel===0.25){
//     alert("please refill the fuel in your car")
// }
// else{
//     alert("happy journey")
// }

// Answer # 5

// // a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// // b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // f.
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Answer # 6

// var sub1 = +prompt("enter your english marks");
//   var sub2 = +prompt("enter your urdu marks");
//   var sub3 = +prompt("enter your science marks");
//   var sub4 = +prompt("enter your maths marks");
//   var totalMarks = 400;

//   var obtainedMarks = sub1 + sub2 + sub3 + sub4;
//   var percentage = (obtainedMarks / totalMarks) * 100;
//   var grade = "";

//   if (percentage >= 80) {
//     grade = "A+";
//   } else if (percentage >= 70) {
//     grade = "A";
//   } else if (percentage >= 60) {
//     grade = "B";
//   } else if (percentage >= 50) {
//     grade = "C";
//   } else {
//     grade = "Fail";
//   }

//   alert("Obtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%\nGrade: " + grade);

// Answer # 7

// var secretNumber = 7;

// var userGuess = +prompt("Guess the secret number (1 to 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct Answer");
// }
// else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }

// Answer # 8

// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// }
//  else {
//     alert(number + " is not divisible by 3");
// }


// Answer # 9

// var num = +prompt("Enter a number:");

// if (num % 2 === 0) {
//     alert(num + " is an even number");
// } 
// else {
//     alert(num + " is an odd number");
// }

// Answer # 10

// var T = +prompt("Enter the temperature:");

// if (T > 40) {
//     alert("It is too hot outside.");
// }
// else if (T > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (T > 20) {
//     alert("Today’s Weather is cool.");
// }
// else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }

// Answer # 11

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//     result = num1 + num2;
//     alert("Result: " + result);
// }
// else if (operation === "-") {
//     result = num1 - num2;
//     alert("Result: " + result);
// }
// else if (operation === "*") {
//     result = num1 * num2;
//     alert("Result: " + result);
// }
// else if (operation === "/") {
//     result = num1 / num2;
//     alert("Result: " + result);
// }
// else if (operation === "%") {
//     result = num1 % num2;
//     alert("Result: " + result);
// }
// else {
//     alert("Invalid operation!");
// }

