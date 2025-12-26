// Assignment # 20  

// Chapter # 35-38 


// Answer # 1

// function showDateTime() {
// var now = new Date();
// document.write("Current Date & Time: " + now);
// }

// showDateTime();


// Answer # 2

// function greetUser(firstName, lastName) {
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");
// }

// greetUser("Ahmed", "Ali");


// Answer # 3

// function addNumbers() {
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var sum = num1 + num2;
// return sum;
// }

// var result = addNumbers();
// alert("Sum of two numbers is: " + result);


// Answer # 4

// function calculator(num1, num2, operator) {
// var result;

// if (operator === "+") {
// result = num1 + num2;
// } else if (operator === "-") {
//  result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
// result = num1 / num2;
// } else {
//    result = "Invalid operator";
// }
//  return result;
// }

// // Example usage
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operator (+, -, *, /):");

// var output = calculator(num1, num2, operator);
// document.write("Result: " + output);


// Answer # 5

// function square(num) {
// return num * num;
// }

// var result = square(5);
// document.write("Square of number is: " + result);


// Answer # 6

// function factorial(num) {
// var result = 1;

// for (var i = 1; i <= num; i++) {
//     result = result * i;
// }

// return result;
// }

// var number = +prompt("Enter a number:");
// var fact = factorial(number);
// document.write("Factorial of " + number + " is: " + fact);


// Answer # 7

// function showCounting(start, end) {
// for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//     }
// }

// var startNum = +prompt("Enter start number:");
// var endNum = +prompt("Enter end number:");

// showCounting(startNum, endNum);


// Answer # 8

// function calculateHypotenuse(base, perpendicular) {
// function calculateSquare(num) {
// return num * num;
// }

// var hypotenuse2 = calculateSquare(base) + calculateSquare(perpendicular);
// var hypotenuse = Math.sqrt(hypotenuse2);

// return hypotenuse;
// }

// var base = +prompt("Enter base:");
// var perpendicular = +prompt("Enter perpendicular:");

// var result = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse is: " + result);


// Answer # 9

// function calculateArea(width, height) {
// return width * height;
// }

// var area1 = calculateArea(5, 10);
// document.write("Area (arguments as values): " + area1 + "<br>");

// var w = 7;
// var h = 4;
// var area2 = calculateArea(w, h);
// document.write("Area (arguments as variables): " + area2);


// Answer # 10

// function isPalindrome(str) {
// str = str.toLowerCase().replace(/\s+/g, '');
    
// var reversed = str.split('').reverse().join('');
    
//     if (str === reversed) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var input = prompt("Enter a string:");
// if (isPalindrome(input)) {
//     document.write("'" + input + "' is a palindrome.");
// } else {
//     document.write("'" + input + "' is not a palindrome.");
// }


// Answer # 11

// function capitalizeWords(str) {
// var words = str.split(" ");
    
// for (var i = 0; i < words.length; i++) {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
    
// return words.join(" ");
// }

// var input = "the quick brown fox";
// var output = capitalizeWords(input);
// document.write("Original: " + input + "<br>");
// document.write("Capitalized: " + output);


// Answer # 12

// function findLongestWord(str) {
// var words = str.split(" "); 
// var longest = "";

// for (var i = 0; i < words.length; i++) {
//      if (words[i].length > longest.length) {
//             longest = words[i];
//         }
// }

// return longest;

// }

// var input = "Web Development Tutorial";
// var longestWord = findLongestWord(input);
// document.write("Original string: " + input + "<br>");
// document.write("Longest word: " + longestWord);


// Answer # 13 

// function countLetter(str, letter) {
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
// }

// return count;

// }

// var inputString = "JSResourceS.com";
// var inputLetter = "o";
// var occurrences = countLetter(inputString, inputLetter);
// document.write("String: " + inputString + "<br>");
// document.write("Letter: " + inputLetter + "<br>");
// document.write("Occurrences: " + occurrences);


// Answer # 14

// function calcCircumference(radius) {
// var circumference = 2 * Math.PI * radius;
// document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }

// function calcArea(radius) {
// var area = Math.PI * radius * radius;
// document.write("The area is " + area.toFixed(2));
// }

// var radius = +prompt("Enter the radius of the circle:");
// calcCircumference(radius);
// calcArea(radius);


