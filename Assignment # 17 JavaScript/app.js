
// Answer # 1

// var firstname = prompt("Enter your first name:")
// var lastname = prompt("Enter your last name:")

// var fullname = firstname + " " + lastname

// alert("Hello " + fullname + " Welcome! ")


// Answer # 2

// var favmob = prompt("Enter Your Favorite Mobile Phone Model")

// document.write("My Favorite Phone is : " + favmob + "<br>")
// document.write("Length Of String : " + favmob.length)


// Answer # 3

// var word = "Pakistani"
// var index = word.indexOf ("n")

// document.write("String: " + word + "<br>")
// document.write("Index of 'n': " + index)


// Answer # 4

// var word = "Hello World"
// var lastindex = word.lastIndexOf ("l")

// document.write("String : " + word + "<br>")
// document.write("Last index of 'l' : " + lastindex)


// Answer # 5

// var word = "Pakistani"
// var Character = word.charAt ("3")

// document.write("String: " + word + "<br>")
// document.write("Character at index '3': " + Character)


// Answer # 6

// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last name:");
// var fullname = firstname.concat(" ", lastname);

// alert("Hello " + fullname + "! Welcome.");


// Answer # 7

// var city = "Hyderabad"
// var replacecity = city.replace("Hyder", "Islam")

// document.write("City : " + city + "<br>")
// document.write("After Replacement : " + replacecity)


// Answer # 8

// var message = "Ali and Sami are best friends. They play cricket and football together." 
// var Replacement = message.replace(/and/g, "&")

// document.write("Before Replacement : " + message + "<br>")
// document.write("After Replacement : " + Replacement )


// Answer # 9

// var str = "472"
// var num = Number(str)

// document.write("Value: " + num + "<br>")
// document.write("Type: " + typeof num + "<br><br>")

// document.write("Original Value (string): " + str + "<br>")
// document.write("Original Type: " + typeof str)


// Answer # 10

// var userinput = prompt("Enter your Text Here")
// var uppercase = userinput.toUpperCase()

// document.write("User Input : " + userinput + "<br>")
// document.write("Upper Case : " + uppercase)


// Answer # 11

// var userInput = prompt("Enter any text:");

// var titleCase =
// userInput.toLowerCase().replace(/\b\w/g, function(letter)
// {return letter.toUpperCase(); 
// });

// document.write("Input in Title Case: " + titleCase);


// Answer # 12

// var num = 35.36
// var str = num.toString()
// var result = str.replace(".","")

// document.write("Result : " + result)


// Answer # 13

// var username = prompt("Enter your username:");

// for (var i = 0; i < username.length; i++) {
// var charCode = username.charCodeAt(i);

// if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
// alert("Please enter a valid username.\nSpecial characters [@ . , !] are not allowed.");
// username = prompt("Enter your username again:");
// break;
// }
// }

// document.write("Your Username: " + username);



// Answer # 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery! What do you want to order?");
// var searchItem = userInput.toLowerCase();
// var index = A.indexOf(searchItem);

// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery.");
// } else {
//     alert("We are sorry! " + userInput + " is not available in our bakery.");
// }


// Answer # 15

// var password = prompt("Enter your password:");

// function isValidPassword(password) {
//     if (password.length < 6) {
//         return false;
//     }

//     var firstChar = password.charCodeAt(0);
//     if (firstChar >= 48 && firstChar <= 57) { 
//         return false;
//     }

//     var hasAlphabet = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);

//         if (
//             (code >= 65 && code <= 90) || 
//             (code >= 97 && code <= 122)       
//         ) {
//             hasAlphabet = true;
//         }

//         if (code >= 48 && code <= 57) {       
//             hasNumber = true;
//         }
//     }

//     return hasAlphabet && hasNumber;
// }

// while (!isValidPassword(password)) {
// alert("Invalid password!\n\nPassword must:\n• Contain letters and numbers\n• Not start with a number\n• Be at least 6 characters long");
// password = prompt("Enter a valid password:");
// }

// document.write("Your password is valid.");


// Answer # 16

// var university = "University of Karachi";
// var arr = university.split("");

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


// Answer # 17

// var userInput = prompt("Enter a word or sentence:");
// var lastChar = userInput.charAt(userInput.length - 1);

// document.write("The last character is: " + lastChar);


// Answer # 18

// var str = "The quick brown fox jumps over the lazy dog";
// var lowerStr = str.toLowerCase();
// var words = lowerStr.split(" ");
// var count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write('The word "the" occurs ' + count + ' times.');


