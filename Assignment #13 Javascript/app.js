// Chapter # 1 Alerts

// Ans # 1
// alert("Ahmed")
// alert("Muhammad Ali")
// alert("XYZ123@gmail.com")
// alert("03222818761")
// alert("12345678")
// // Ans # 2
// alert("You're learning JavaScript!")
// // Ans # 3
// alert("Welcome to my web")


// Chapter # 2 Variables and string

// Ans # 1
// var ahmedAli

// // Ans # 2
// var hello
// hello = "hello world"
// alert (hello)

// // Ans # 3
// var teamName = "Dream11"
// alert (teamName)

// // Ans # 4
// var batsman = "Virat Kohli"
// batsman = "Babar Azam"
// alert(batsman)


// Chapter # 3 variables for numbers

// // Ans # 1
// var caseQty

// // Ans # 2
// caseQty = 144
// alert(caseQty)

// // Ans # 3
// var num = 9
// alert(num)

// // Ans # 4
// var total
// total = 15 + 5
// alert(total)

// // Ans # 5
// var merchTotal = 100
// var shippingCharge = 10
// var orderTotal = merchTotal + shippingCharge
// alert(orderTotal)

// // Ans # 6
// var score = 60
// score = score + 30
// alert(score)


// Chapter # 4 VARIABLE NAMES: LEGAL & ILLEGAL:

// // Ans # 1
// var a = 10
// var b = 30
// var c = 50
// var d = a+b+c
// console.log(d);

// // Ans # 2
// document.write("<h2>Legal Names</h2>")
// document.write("firstname; $price;  _userName; user1; totalAmount;")
// document.write("<h2>Illegal Names</h2>")
// document.write("1name; user-name; ?name; +user1;")

// Ans # 3 in html sheet


// Chapter # 5 MATH EXPRESSIONS:

// Ans # 1
// var num1 = 3
// var num2 = 6
// var sum = num1+num2
// document.write("sum of "+ num1+ "and"+ num2+ "is"+ sum) 

// Ans # 2
// // Subtraction
// var num1 = 10;
// var num2 = 5;
// var subtraction = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is: " + subtraction + "<br>");

// // Multiplication
// var multiplication = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is: " + multiplication + "<br>");

// // Division
// var division = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is: " + division + "<br>");

// // Modulus (Remainder)
// var modulus = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is: " + modulus);

// Ans # 3
 // a. Declare a variable
//   var num;

//   // b. Show value after declaration
//   document.write("Value after variable declaration is " + num + "<br>");

//   // c. Initialize the variable with some number
//   num = 5;

//   // d. Show initial value
//   document.write("Initial value: " + num + "<br>");

//   // e. Increment the variable
//   num++;

//   // f. Show value after increment
//   document.write("Value after increment is: " + num + "<br>");

//   // g. Add 7 to the variable
//   num = num + 7;

//   // h. Show value after addition
//   document.write("Value after addition is: " + num + "<br>");

//   // i. Decrement the variable
//   num--;

//   // j. Show value after decrement
//   document.write("Value after decrement is: " + num + "<br>");

//   // k. Show remainder after dividing by 3
//   var remainder = num % 3;

//   // l. Output the remainder
//   document.write("The remainder is: " + remainder);

// Ans # 4
// var num1 = 600
// var num2 = 5
// var sum = num1*num2
// document.write(" The total cost of one ticket "+ num1+ " and 5 ticket cost  "+  "of "+ sum + "PKR" ) 

// Ans # 5
// document.write("Table of 5" +"<br>" )
// document.write("5x1=5" +"<br>")
// document.write("5x2=10" +"<br>")
// document.write("5x3=15" +"<br>")
// document.write("5x4=20" +"<br>")
// document.write("5x5=25" +"<br>")
// document.write("5x6=30" +"<br>")
// document.write("5x7=35" +"<br>")
// document.write("5x8=40" +"<br>")
// document.write("5x9=45" +"<br>")
// document.write("5x10=50" +"<br>")

// // Ans # 6
// var celsius = 30;

// var fahrenheit = (celsius * 9/5) + 32;
// console.log(`${celsius}°C is ${fahrenheit}°F`);

// fahrenheit = 86;

// celsius = (fahrenheit - 32) * 5/9;
// console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);

// Ans # 7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// document.write("<h2>Shopping Cart</h2>");
// document.write("Price of Item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of Item 1 is " + quantityItem1 + "<br>");
// document.write("Price of Item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of Item 2 is " + quantityItem2 + "<br>");
// document.write("Shipping Charges: " + shippingCharges + "<br><br>");
// document.write("<strong>Total Cost of Your Order is " + totalCost + " PKR</strong>");

// Ans # 8
// var totalMarks = 500;
// var marksObtained = 420;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Mark Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

// Ans # 9
// var usDollars = 10;
// var saudiRiyals = 25;
// var totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);
// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency in PKR: " + totalPKR);

// Ans # 10
// var number = 10;
// var result = ((number + 5) * 10) / 2;
// document.write("Initial Number: " + number + "<br>");
// ocument.write("Result after arithmetic operations: " + result);

// // Ans # 11
// var currentYear = 2025;
// var birthYear = 2002;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("<h2>Age Calculator</h2>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your age is: " +  + age1 + " years old.");

// // Ans # 12
// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;
// document.write("<h2>The Geometrizer</h2>");
// document.write("Radius of Circle: " + radius + "<br>");
// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area);

// // Ans # 13
// var favoriteSnack = "Chocolate Chip Cookies";
// var currentAge = 20;
// var maxAge = 80;
// var perDay = 2;
// var totalNeeded = (maxAge - currentAge) * 365 * perDay;
// document.write("<h2>The Lifetime supply Calculator</h2>");
// document.write("Favorite Snack: " + favoriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per Day: " + perDay + "<br><br>");
// document.write("You will need " + totalNeeded + " " + favoriteSnack +
// " to last you until the ripe old age of " + maxAge + ".");

                   
// CHAPTER # 6...........

// Ans # 1
// var number = 5;
// document.write("Initial value: " + number + "<br><br>");
// number++;
// document.write("Value after increment is: " + number + "<br>");
// number = number + 7;
// document.write("Value after addition is: " + number + "<br>");
// number--;
// document.write("Value after decrement is: " + number + "<br>");
// var remainder = number % 3;
// document.write("The remainder is: " + remainder);

// // Ans # 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result)

// // Ans # 3
// var userName = prompt("Enter your name:");
// document.write("Hello " + userName + "! Welcome to our website");

// Ans # 4
// document.write("Table of 5" +"<br>" )
// document.write("5x1=5" +"<br>")
// document.write("5x2=10" +"<br>")
// document.write("5x3=15" +"<br>")
// document.write("5x4=20" +"<br>")
// document.write("5x5=25" +"<br>")
// document.write("5x6=30" +"<br>")
// document.write("5x7=35" +"<br>")
// document.write("5x8=40" +"<br>")
// document.write("5x9=45" +"<br>")
// document.write("5x10=50" +"<br>")

// Ans # 5
// // a) Take three subject names from user
//     var subject1 = prompt("Enter first subject name:");
//     var subject2 = prompt("Enter second subject name:");
//     var subject3 = prompt("Enter third subject name:");

//     // b) Total marks for each subject
//     var totalMarks = 100;

//     // c) Take obtained marks for each subject
//     var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
//     var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
//     var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

//     // d) Calculate total obtained marks and percentage
//     var totalObtained = obtained1 + obtained2 + obtained3;
//     var totalPossible = totalMarks * 3;
//     var percentage = (totalObtained / totalPossible) * 100;

//     // e) Display result in a table
//     document.write(`
//       <table border="1" cellspacing="0" cellpadding="8">
//         <tr>
//           <th>Subject</th>
//           <th>Total Marks</th>
//           <th>Obtained Marks</th>
//           <th>Percentage</th>
//         </tr>
//         <tr>
//           <td>${subject1}</td>
//           <td>${totalMarks}</td>
//           <td>${obtained1}</td>
//           <td>${(obtained1 / totalMarks * 100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//           <td>${subject2}</td>
//           <td>${totalMarks}</td>
//           <td>${obtained2}</td>
//           <td>${(obtained2 / totalMarks * 100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//           <td>${subject3}</td>
//           <td>${totalMarks}</td>
//           <td>${obtained3}</td>
//           <td>${(obtained3 / totalMarks * 100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//           <th>Total</th>
//           <th>${totalPossible}</th>
//           <th>${totalObtained}</th>
//           <th>${percentage.toFixed(2)}%</th>
//         </tr>
//       </table>
//     `);