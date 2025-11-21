// CHAPTER NAME : ARRAYS

// Answer # 1

// var studentname = []
// studentname.push("Ahmed")
// console.log(studentname);

// Answer # 2

// var studentname = new Array();
// studentname.push("hamza")
// console.log(studentname);

// Answer # 3 

// var strings = ['apple', 'banana', 'mango', 'kiwi']
// console.log(strings);

// Answer # 4

// var numbers = [10,20,30,40]
// console.log(numbers);

// Answer # 5

// var boolean = [true, false, true, false];
// console.log(boolean);

// Answer # 6

// var mixed = ['Ahmed', 10,true,56,'Ali']
// console.log(mixed);

// Answer # 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications In Pakistan:</h2>")

// document.write(qualifications[0] + "<br>")
// document.write(qualifications[1] + "<br>")
// document.write(qualifications[2] + "<br>")
// document.write(qualifications[3] + "<br>")
// document.write(qualifications[4] + "<br>")
// document.write(qualifications[5] + "<br>")
// document.write(qualifications[6] + "<br>")
// document.write(qualifications[7] + "<br>")

// Answer # 8

// var studentnames = ['Ahmed','Hassan','Ali']
// var studentscores = [450,400,350]
// var totalmarks = [500]

// var percentage1 = (studentscores[0] / totalmarks) * 100
// var percentage2 = (studentscores[1] / totalmarks) * 100
// var percentage3 = (studentscores[2] / totalmarks) * 100

// document.write('Score of ' + studentnames[0] + ' is ' + studentscores[0] + ' percentage ' + percentage1 + ' %<br>')
// document.write('Score of ' + studentnames[1] + ' is ' + studentscores[1] + ' percentage ' + percentage2 + ' %<br>')
// document.write('Score of ' + studentnames[2] + ' is ' + studentscores[2] + ' percentage ' + percentage3 + ' %<br>')

// Answer # 9

// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

// // a)
// var addBegin = prompt("Which color do you want to add at the beginning?");
// colors.unshift(addBegin);
// document.write("<b>After adding at beginning:</b> " + colors + "<br><br>");

// // b)
// var addEnd = prompt("Which color do you want to add at the end?");
// colors.push(addEnd);
// document.write("<b>After adding at end:</b> " + colors + "<br><br>");

// // c)
// colors.unshift("Purple", "Yellow");
// document.write("<b>After adding two more at beginning:</b> " + colors + "<br><br>");

// // d)
// colors.shift();
// document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

// // e)
// colors.pop();
// document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

// // f) 
// var indexAdd = +prompt("At which index do you want to add a color?");
// var colorName = prompt("Enter color name to add:");
// colors.splice(indexAdd, 0, colorName);
// document.write("<b>After adding color at index " + indexAdd + ":</b> " + colors + "<br><br>");

// // g) 
// var indexDel = +prompt("At which index do you want to delete color(s)?");
// var countDel = +prompt("How many colors do you want to delete?");
// colors.splice(indexDel, countDel);
// document.write("<b>After deleting " + countDel + " color(s) from index " + indexDel + ":</b> " + colors + "<br><br>");

// Answer # 10

// var scores = [88, 75, 92, 60, 83, 95, 70]

// scores.sort(function(a, b) {return a - b; })
// console.log("Sorted Scores (Ascending):", scores)

// Answer # 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selectedCities = cities.slice(0, 3)

// console.log("All Cities:", cities)
// console.log("Selected Cities:", selectedCities)

// Answer # 12

// var arr = ["This", " is", " my", " cat"];
// var result = arr.join("");

// console.log(result);

// Answer # 13

// var queue = [];

// queue.push("Apple");
// queue.push("Mango");
// queue.push("Banana");
// queue.push("Orange");

// document.write(queue.shift() + "<br>");
// document.write(queue.shift() + "<br>"); 
// document.write(queue.shift() + "<br>"); 
// document.write(queue.shift() + "<br>"); 

// Answer # 14

// var stack = [];

// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Monitor");
// stack.push("CPU");

// document.write(stack.pop() + "<br>");
// document.write(stack.pop() + "<br>"); 
// document.write(stack.pop() + "<br>"); 
// document.write(stack.pop() + "<br>"); 

// Answer # 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + manufacturers[0] + "</option>");
// document.write("<option>" + manufacturers[1] + "</option>");
// document.write("<option>" + manufacturers[2] + "</option>");
// document.write("<option>" + manufacturers[3] + "</option>");
// document.write("<option>" + manufacturers[4] + "</option>");
// document.write("<option>" + manufacturers[5] + "</option>");
// document.write("</select>");
