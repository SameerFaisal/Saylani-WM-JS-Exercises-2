/* -------------Chapter no 21-25--------------- */

//Q # 1
var firstName = prompt("Enter Your First Name:");
var lastName = prompt("Enter Your Last Name:");
var fullName = firstName + " " + lastName;
alert("Greeting! " + fullName);

//Q # 2
var mobileModel = prompt("Enter Your Favourite Mobile Model:");
var length = mobileModel.length;
document.write("My Faourite Phone is: " + mobileModel);
document.write("<br/>");
document.writeln("Length of String: " + length);

//Q # 3
document.write("<br/><br/>");
var str = "Pakistan";
var index = str.indexOf("n");
document.write("String " + str + "<br/>");
document.write("Index of 'n' is: " + index);

//Q # 4
document.write("<br/><br/>");
var wrd = "Hello World";
var lastIndex = wrd.lastIndexOf("l");
document.write("String: " + wrd + "<br/>");
document.write("Last Index of 'l' is: " + lastIndex);

//Q # 5
document.write("<br/><br/>");
var str1 = "Pakistani";
var chr = str1.charAt(3);
document.write("String: " + str1 + "<br/>");
document.write("Character at index 3: " + chr);

//Q # 6
var fName = firstName.concat(lastName);
alert("Greeting! " + fName);

//Q # 7
document.write("<br/><br/>");
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);

//Q # 8
document.write("<br/><br/><br/><br/>");
var message = "Ali and Sami are best friends.They play cricket and football together.";
message = message.replace(/and/g, "&");
document.write(message);

//Q # 9
document.write("<br/><br/><br/><br/>");
var value = "472";
document.write("Value: " + value);
document.write("<br/>Type: " + typeof value);
var cnValue = parseInt(value);
document.write("<br/>Value: " + cnValue);
document.write("<br/>Type: " + typeof cnValue);

//Q # 10
document.write("<br/><br/><br/><br/>");
var userInput = prompt("Input any string: ");
var upCase = userInput.toUpperCase();
document.write("Upper Case: " + upCase);

//Q # 11
document.write("<br/><br/><br/><br/>");
var firstChar = userInput.slice(0, 1);
var remChar = userInput.slice(1, );
document.write("Title case: " + firstChar.toUpperCase() + remChar.toLowerCase());

//Q # 12
document.write("<br/><br/><br/><br/>");
var number = 35.36;
var result = parseInt(number.toString().replace('.', ''));
document.write("Number : " + number + " <br>Result : " + result);

//Q # 13
document.write("<br/><br/><br/><br/>");
var name = prompt("Enter your username:");
if ((name.indexOf('@') != -1) || (name.indexOf('.') != -1) || (name.indexOf(',') != -1) || (name.indexOf('!') != -1)) {
    alert("Please enter a valid name");
}

//Q # 14
document.write("<br/><br/><br/><br/>");
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItems = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
var searchItems = searchItems.toLowerCase();
var res = items.indexOf(searchItems);
if (res === -1) {
    document.write("We are sorry " + searchItems + " is <b>not availlable</b> in our bakery.");
} else {
    document.write(searchItems + " is <b>available</b> at index " + res + " of our bakery.");
}

//Q # 15
document.write("<br/><br/><br/><br/>");

function checkAlphaNum(str) {
    var alpha = 0;
    var num = 0;
    for (var i = 0; i <= str.length; i++) {
        if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
            alpha = 1;
        } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            num = 1;
        }
    }
    if (alpha === 0 || num === 0) {
        return 1;
    } else {
        return 0;
    }
}
var pswd = prompt("Enter your password:");
if (pswd.charCodeAt(0) >= 48 && pswd.charCodeAt(0) <= 57) {
    document.write("<h1>Entered Password: " + pswd + "<br>Password can not begin with a number<br>Please enter a valid password</h1>");
} else if (pswd.length < 6) {
    document.write("<h1>Entered Password: " + pswd + "<br>Password must be atleast 6 characters long<br>Please enter a valid password</h1>");
} else if (checkAlphaNum(pswd)) {
    document.write("<h1>Entered Password: " + pswd + "<br>Password must contain alphabets and numbers<br>Please enter a valid password</h1>");
} else {
    document.write("<h1>Entered Password: " + pswd + "<br>Your password is valid</h1>");
}

//Q # 16
document.write("<br/><br/><br/><br/>");
var university = "University of Karachi ";
var array = university.split("");
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}

//Q # 17
document.write("<br/><br/><br/><br/>");
var inputString = prompt("Enter a String: ");
document.write("User Input: " + inputString);
var lastChar = inputString[inputString.length - 1];
document.write("<h1>User input: " + inputString + "<br>Last character of input: " + lastChar + "</h1>");

//Q # 18
document.write("<br/><br/><br/><br/>");
var str3 = "The quick brown fox jumps over the lazy dog ";
var strLength = str3.toLowerCase();
var count = (strLength.match(/the/g)).length;
document.write("<h1>Text: " + strLength + "<br>There are " + count + " occurance(s) of word 'the'</h1>");

/* -------------Chapter no 26-30--------------- */

//Q # 1
document.write("<br/><br/><br/><br/>");
var inputNumber = prompt("Enter a positive number: ");
var inputNumberCN = parseFloat(inputNumber);
if (inputNumberCN < 0) {
    alert("Invalid Input");
} else {
    document.write("<br/>Number: " + inputNumberCN);
    document.write("<br/>round off value: " + Math.round(inputNumberCN));
    document.write("<br/>floor value: " + Math.floor(inputNumberCN));
    document.write("<br/>ceil value: " + Math.ceil(inputNumberCN));
}

//Q # 2
document.write("<br/><br/><br/><br/>");
var negNumber = prompt("Enter a negative number: ");
var negNumberCN = parseFloat(negNumber);
if (negNumberCN > 0) {
    alert("Invalid Input");
} else {
    document.write("<br/>Number: " + negNumberCN);
    document.write("<br/>round off value: " + Math.round(negNumberCN));
    document.write("<br/>floor value: " + Math.floor(negNumberCN));
    document.write("<br/>ceil value: " + Math.ceil(negNumberCN));
}

//Q # 3
document.write("<br/><br/><br/><br/>");
var numAbs = parseFloat(prompt("Enter a number to get it's absolute value: "));
document.write("<h1>The absolute value of " + numAbs + " is " + Math.abs(numAbs) + "</h1>");

//Q # 4
document.write("<br/><br/><br/><br/>");
document.write("Random dice value: " + Math.ceil(Math.random() * 6));

//Q # 5
document.write("<br/><br/><br/><br/>");
if (Math.ceil(Math.random() * 2) === 1)
    document.write("Random coin value: Tails");
else
    document.write("Random coin value: Heads");

//Q # 6
document.write("<br/><br/><br/><br/>");
document.write("Random number between 1 and 100: " + Math.ceil(Math.random() * 100));

//Q # 7
document.write("<br/><br/><br/><br/>");
var weight = prompt("Enter your weight in kilograms");
var weightCN = parseFloat(weight);
document.write("Th weight of user is " + weightCN + " kilograms");

//Q # 8
document.write("<br/><br/><br/><br/>");
var randNumber = Math.floor(Math.random() * 10);
var guess = parseInt(prompt("Enter a number between 1 to 10"));
if (guess == randNumber) {
    alert("Congratulation your guess is correct");
} else {
    alert("Try again ");
}

/* -------------Chapter no 31-34--------------- */