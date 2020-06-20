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
    document.write("Entered Password: " + pswd + "<br>Password can not begin with a number<br>Please enter a valid password");
} else if (pswd.length < 6) {
    document.write("Entered Password: " + pswd + "<br>Password must be atleast 6 characters long<br>Please enter a valid password");
} else if (checkAlphaNum(pswd)) {
    document.write("Entered Password: " + pswd + "<br>Password must contain alphabets and numbers<br>Please enter a valid password");
} else {
    document.write("Entered Password: " + pswd + "<br>Your password is valid");
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
document.write("User input: " + inputString + "<br>Last character of input: " + lastChar);

//Q # 18
document.write("<br/><br/><br/><br/>");
var str3 = "The quick brown fox jumps over the lazy dog ";
var strLength = str3.toLowerCase();
var count = (strLength.match(/the/g)).length;
document.write("Text: " + strLength + "<br>There are " + count + " occurance(s) of word 'the'");

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

//Q # 1
document.write("<br/><br/><br/><br/>");
var d = new Date();
document.write("Current Date: " + d);


//Q # 2
document.write("<br/><br/><br/><br/>");
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = new Date();
document.write("The current month is: " + monthsName[d.getMonth()]);

//Q # 3
document.write("<br/><br/><br/><br/>");
var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = new Date();
document.write("Today is: " + daysName[day.getDay()]);


//Q # 4
document.write("<br/><br/><br/><br/>");
var days = new Date();
var currentDay = days.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
if (dayNames[currentDay] === "Sat" || dayNames[currentDay] === "Sun") {
    document.write("It`s Fun day");
}

//Q # 5
document.write("<br/><br/><br/><br/>");
var dateofMonth = new Date();
var currentDate = dateofMonth.getDate();
if (currentDate >= "1" && currentDate <= "15") {
    document.write("First-fifteen days of the month");
} else {
    document.write("Last days of the month");
}

//Q # 6
document.write("<br/><br/><br/><br/>");
var today = new Date();
var otherDay = new Date("January 1, 1970");
var msToday = today.getTime();
var msOtherDay = otherDay.getTime();
var msDiff = msToday - msOtherDay;
var mDiff = msDiff / (3600000);
document.write("Current Date: " + today + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + msDiff + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + mDiff)

//Q # 7
document.write("<br/><br/><br/><br/>");
var timeNow = new Date();
var hours = timeNow.getHours();
if (hours >= 0 && hours < 12) {
    document.write("It`s AM");
} else {
    document.write("It`s PM");
}

//Q # 8
document.write("<br/><br/><br/><br/>");
var laterDate = new Date("Thu December 31, 2020");
document.write("Later date: " + laterDate);

//Q # 9
document.write("<br/><br/><br/><br/>");
var firstRamadan = new Date("June 18, 2015");
var todaysDay = new Date();
var days1 = (todaysDay.getTime() - firstRamadan.getTime()) / (1000 * 60 * 60 * 24);
days1 = Math.floor(days1);
document.write(days1 + " days have passed since 1st Ramadan,2015 ");

//Q # 10
document.write("<br/><br/><br/><br/>");
var ref = new Date("Dec 05, 2015 22:50:16");
var date = new Date("Jan 01, 2015");
var sec = (ref.getTime() - date.getTime()) / (1000 * 60);
sec = Math.ceil(sec);
document.write("On reference date " + ref + "<br>");
document.write(sec + " seconds had passed since beginning of 2015 ");

//Q # 11
document.write("<br/><br/><br/><br/>");
var cur = new Date();
document.write("Current date : " + cur);
var agotime = new Date();
agotime.setHours(agotime.getHours() - 1);
document.write("<br>1 hour ago, it was " + agotime);

//Q # 12
document.write("<br/><br/><br/><br/>");
var curDate = new Date();
var lstDate = new Date();
lstDate.setFullYear(lstDate.getFullYear() - 100);
document.write("Current date: " + curDate + ",<br>100 years back, it was " + lstDate);

//Q # 13
var age = prompt("Enter your age");
var currentDate = new Date();
var curYear = currentDate.getFullYear();
brtYear = curYear - age;
document.write("Your age is " + age + "<br>Your birth year is " + brtYear);

//Q # 14
document.write("<br/><br/><br/><br/>");
document.write("<h1>K-ELECTRIC BILL<h1/>");
var nowDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Deember"];
var curMonth = months[nowDate.getMonth()];
var customerName = "Sameer Faisal";
var units = 411.55894723;
var amountPerUnit = 16;
var lateSurcharge = 350;
var amountDue = parseFloat((units * amountPerUnit).toFixed(2));
var amountAftDue = parseFloat((amountDue + lateSurcharge).toFixed(2));;
document.write("<h3>Customer name: <b>" + customerName + "</b><br>Month: <b>" + curMonth + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + amountPerUnit + "</b><br><br>Net amount payable(within due date): <b>" + amountDue + "</b><br>Late payment surcharge: <b>" + lateSurcharge + "</b><br>Gross amount payable after due date: <b>" + amountAftDue + "</b></h3>");

/* -------------Chapter no 35-38--------------- */

//Q # 1
document.write("<br/><br/><br/><br/>");

function currentdate() {
    return (new Date());
}
var dd = currentdate();
document.write(dd);

//Q # 2
document.write("<br/><br/><br/><br/>");
var fstName = prompt("Enter your First Name")
var lastName = prompt("Enter your last Name")
Name(fstName, lastName);

function Name(a, b) {
    document.write("Greetings!! " + a + " " + b)
}

//Q # 3
document.write("<br/><br/><br/><br/>");
var firstNumber = prompt("Enter First Number");
var secondNumber = prompt("Enter Second Number");
var result = sum(firstNumber, secondNumber);
document.write(result);

function sum(fNumber, sNumber) {
    var result = parseFloat(fNumber) + parseFloat(sNumber);
    return (result);
}

//Q # 4
document.write("<br/><br/><br/><br/>");
document.write("<h1>Calculator<h1/>");
var firNum = prompt("Enter first Number");
var secNum = prompt("Enter second Number");
var op = prompt("Enter an operator (+, -, *, /, %):");

document.write("The desired result is: " + calculator(firNum, secNum, op));

function calculator(num1, num2, ope) {
    if (ope === "+") {
        return (parseFloat(num1) + parseFloat(num2));
    } else if (ope === "-") {
        return (parseFloat(num1) - parseFloat(num2));
    } else if (ope === "*") {
        return (parseFloat(num1) * parseFloat(num2));
    } else if (ope === "/") {
        return (parseFloat(num1) / parseFloat(num2));
    } else if (ope === "%") {
        return (parseFloat(num1) % parseFloat(num2));
    }

}

//Q # 5
document.write("<br/><br/><br/><br/>");
var squareNumber = prompt("Enter a number to be squared: ");
document.write("The square of " + squareNumber + " is " + squaring(squareNumber));

function squaring(sqNum) {
    return (parseFloat(sqNum) * parseFloat(sqNum));
}

//Q # 6
document.write("<br/><br/><br/><br/>");
var a = +prompt("Enter number for factorial computing: ");
document.write("The factorial of: " + a + " is " + Factorial(a));

function Factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

//Q # 7
document.write("<br/><br/><br/><br/>");
var stNum = +prompt("Where to start counting from?");
var enNum = +prompt("Where to end the counting?");
Counting(stNum, enNum);

function Counting(stNum, enNum) {
    for (var k = stNum; k <= enNum; k++) {
        document.write(k + "<br>")
    }
}

//Q # 8
document.write("<br/><br/><br/><br/>");
var baseTriangle = prompt("Enter base of the triangle");
var perpTriangle = prompt("Enter perpendicular of the triangle");

function calculateHypotenuse(base, perp) {

    function calculateSquare(num) {
        return num * num;
    }
    hyp = calculateSquare(base) + calculateSquare(perp);
    return Math.sqrt(hyp);
}
document.write(calculateHypotenuse(parseFloat(baseTriangle), parseFloat(perpTriangle)));

//Q # 9
document.write("<br/><br/><br/><br/>");

function area(width, height) {
    return width * height;
}
document.write("area is " + area(12, 15) + "<br>"); // Passing values
var w = 12;
var h = 15;
document.write("another area is " + area(w, h)); // Passing variables

//Q # 10
document.write("<br/><br/><br/><br/>");

function palindromeCheck(string) {
    var string2 = "";
    for (i = string.length - 1; i >= 0; i--) {
        string2 += string[i];
    }
    if (string2 == string) {
        document.write(string + " is a palindrome word");
    } else {

    }
}
var word = prompt("Enter a word");
palindromeCheck(word);

//Q # 11
document.write("<br/><br/><br/><br/>");

function convFirst(string) {
    var letter = " ";
    for (j = 0; j < string.length; j++) {
        if (letter === " ") {
            letter = string[j];
            document.write(letter.toUpperCase());
        } else {
            letter = string[j];
            document.write(letter);
        }
    }
}
convFirst(prompt("Enter a string"));

//Q # 12
document.write("<br/><br/><br/><br/>");

var longestSTR = prompt("Enter a string to extract longest word");
document.write("Longest Word: " + longestWord(longestSTR));

function longestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word = "";
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return word;
}

//Q # 13
document.write("<br/><br/><br/><br/>");

function charCounter(string, char) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}
var count = charCounter("JSResources.com", "o");
document.write("'o' occured " + count + " times in JSResources.com");

//Q # 14
document.write("<br/><br/><br/><br/>");
document.write("<h1>The Geometrizer<h1/>");

function calcCircumference(r) {
    var c = 2 * 3.142 * r;
    return c;
}

function calcArea(r) {
    var a = 3.142 * r * r;
    return a;
}
var radius = prompt("Enter radius of circle");
document.write("The circumference is " + calcCircumference(radius) + "<br>");
document.write("The area is " + calcArea(radius));