// Comment


/* 
    Table of Contents: 

        - Variables
        - Arithmetic Expressions
        - User Input
        - Type Conversion
        - Constants
        - Math Functions
        - Hypotenuse Calculator
        - Counter Program
        - Random Number Generator
        - String Properties and Methods
        - If Else Statements
*/


/* Variables

    - Variables are containers for storing data values.
    - A variable behave as if it was the value that it contains.

    Declaring Variables:

        - To declare a variable, we use the keyword var, let or const.
        - The keyword var is used to declare a variable in the global scope.
        - The keyword let is used to declare a variable in the local scope.
        - The keyword const is used to declare a variable in the local scope, 
            but the value of the variable cannot be changed.
    
    Assigning Values:

        - To assign a value to a variable, we use the assignment operator (=).
        - The assignment operator assigns the value on the right to the variable on the left.
        - The assignment operator can be used to assign a value to a variable when it is declared.

    Data Types:

        - Data types are the types of data that can be stored in a variable.
        - There are 5 primitive data types in JavaScript:
            
            - String: A string is a sequence of characters.
            - Number: A number is a numeric value.
            - Boolean: A boolean is a logical value that can be either true or false.
            - Undefined: A variable that has not been assigned a value has the value undefined.
            - Null: Null is an assignment value. It can be assigned to a variable as a representation of no value.
*/
function Variables () {

    // String Data Type
    let firstName = "John";

    // Number Data Type
    let age = 21;
    age = age + 1;

    // Boolean Data Type
    let student = false;

    // Undefined Data Type
    let lastName = undefined;

    // Null Data Type
    let car = null;

    console.log("Hello", firstName);
    console.log("You are", age, "years old");
    console.log(student);
    console.log(lastName);
    console.log(car);

    // HTML Output
    document.getElementById("p1").innerHTML = "Hello " + firstName;
    document.getElementById("p2").innerHTML =  "You are " + age + " years old";
    document.getElementById("p3").innerHTML =  "Enrolled: " + student;
    // document.getElementById("p4").innerHTML =  "Last Name: " + lastName;
} Variables();

/* Arithmetic Expressions

    - Arithmetic expressions are expressions that use arithmetic operators.
    - Arithmetic expressions are combination of values, variables and operators.
    - Arithmetic operators are used to perform arithmetic operations on numbers [ + - * / % ].
        - The addition operator (+) adds numbers.
        - The subtraction operator (-) subtracts numbers.
        - The multiplication operator (*) multiplies numbers.
        - The division operator (/) divides numbers.
        - The modulus operator (%) returns the remainder of a division operation.
    - Arithmetic expressions are evaluated from left to right.
    - Arithmetic expressions are evaluated in the following order:
        - Parentheses
        - Exponents
        - Multiplication and Division
        - Addition and Subtraction
*/
function ArithmeticExpressions () {

    // Addition
    let sum = 2 + 2;
    console.log(sum);

    // Subtraction
    let difference = 10 - 5;
    console.log(difference);

    // Multiplication
    let product = 2 * 2;
    console.log(product);

    // Division
    let quotient = 10 / 2;
    console.log(quotient);

    // Modulus
    let remainder = 10 % 3;
    console.log(remainder);

    // HTML Output
    document.getElementById("Sum").innerHTML = "Sum: 2 + 2 = " + sum;
    document.getElementById("Subtraction").innerHTML = "Difference: 10 - 5 = " + difference;
    document.getElementById("Multiplication").innerHTML = "Product: 2 * 2 = " + product;
    document.getElementById("Division").innerHTML = "Quotient: 10 / 2 = " + quotient;
    document.getElementById("Modulus").innerHTML = "Remainder: 10 % 3 = " + remainder;
} ArithmeticExpressions();

/* User Input

    - User input is data that is entered by the user.
    - User input can be entered using the prompt() function.
    - The prompt() function displays a dialog box that prompts the user for input.
    - The prompt() function returns the user input as a string.
    - The alert() function displays a dialog box that displays a message to the user.
    - The alert() function can be used to display the user input.
    - The document.getElementById() function can be used to display the user input in HTML.

    Two Methods: 
    
        - Window Prompt
        - HTML TextBox Input

*/
function UserInput () {

    // Window Prompt
    let name = prompt("What is your name?");
    console.log(name);

    // Alert Message
    alert("Hello " + name);

    // HTML Output
    document.getElementById("UserInput").innerHTML = "Hello " + name;

    // HTML TextBox Input
    document.getElementById("UserInputButton").onclick = function () {
        name = document.getElementById("UserInputText").value;
        console.log(name)
        document.getElementById("UserInputLabel").innerHTML = "Hello " + name;
    }
} UserInput();

/* Type Conversion

    - Type conversion is the process of converting a value from one data type to another.
    - Type conversion can be done automatically or explicitly.
    - Type conversion can be done using the to[DataType]() method.
        - The toString() method converts a number to a string .
        - The toNumber() method converts a string to a number.
        - The toFixed() method converts a number to a string, rounding the number to a specified number of decimals.
        - The toBoolean() method converts a value to a boolean.
        - The toUpperCase() method converts a string to uppercase letters.
        - The toLowerCase() method converts a string to lowercase letters.
        - The toDateString() method converts a date to a string.
        - The toTimeString() method converts a time to a string.
        - The typeof operator returns the type of a variable or an expression.
*/
function TypeConversion () {

    // Number to String
    let num = 10;
    num += 1;
    let numString = num.toString();
    console.log(numString);

    // String to Number
    let str = "10";
    str += 1;
    let strNum = Number(str);
    
    console.log(strNum);

    // Number to Fixed
    let numFixed = num.toFixed(2);
    console.log(numFixed);
    
    // Number to Boolean
    let numBoolean = Boolean(num);
    console.log(numBoolean);

    // String to Boolean
    let strBoolean = Boolean(str);
    console.log(strBoolean);

    // String to Uppercase
    let strUpper = str.toUpperCase();
    console.log(strUpper);

    // String to Lowercase
    let strLower = str.toLowerCase();
    console.log(strLower);

    // Date to String
    let date = new Date();
    let dateStr = date.toDateString();
    console.log(dateStr);

    // Time to String
    let time = new Date();
    let timeStr = time.toTimeString();
    console.log(timeStr);

    // Gets the data type of a variable
    console.log(typeof(numString));
    
    // HTML Output
    document.getElementById("NumToString").innerHTML = "Number to String: " + numString;
    document.getElementById("StringToNumber").innerHTML = "String to Number: " + strNum;
    document.getElementById("NumToFixed").innerHTML = "Number to Fixed: " + numFixed;
    document.getElementById("NumToBoolean").innerHTML = "Number to Boolean: " + numBoolean;
    document.getElementById("StringToBoolean").innerHTML = "String to Boolean: " + strBoolean;
    document.getElementById("StringToUppercase").innerHTML = "String to Uppercase: " + strUpper;
    document.getElementById("StringToLowercase").innerHTML = "String to Lowercase: " + strLower;
    document.getElementById("DateToString").innerHTML = "Date to String: " + dateStr;
    document.getElementById("TimeToString").innerHTML = "Time to String: " + timeStr;
    document.getElementById("DataType").innerHTML = "Data Type: " + typeof(numString);
} TypeConversion();

/* Constants

    - Constants are variables that cannot be reassigned.
    - Constants are declared using the const keyword.
    - Constants are block scoped.
    - Constants must be assigned a value when declared.
    - Constants cannot be declared using the var or let keywords.

*/
function Constants () {
    
        // Constant
        const PI = 3.14;
        let circumference = 2 * PI * 5;
        console.log(PI);
    
        // HTML Output
        document.getElementById("Constant").innerHTML = "Constant: " + PI;
        document.getElementById("Circumference").innerHTML = "Circumference: " + circumference;
} Constants();

/* Math 

    - The Math object allows you to perform mathematical tasks on numbers.
    - The Math object has properties and methods.
        - The Math object has properties for mathematical constants and functions.
        - The Math object has methods for mathematical operations.

    Properties:

        - Math.round - Rounds a number to the nearest integer.
        - Math.floor - Rounds a number down to the nearest integer.
        - Math.ceil - Rounds a number up to the nearest integer.
        - Math.pow - Returns the value of a number to a specified power.
        - Math.sqrt - Returns the square root of a number.
        - Math.abs - Returns the absolute (positive) value of a number.
        - Math.max - Returns the number with the highest value.
        - Math.min - Returns the number with the lowest value.
        - Math.PI - Returns PI.
*/

function MathFunctions () {

    let x = 3.14;
    let y = 5;
    let z = 10;

    a = Math.round(x);
    b = Math.floor(x);
    c = Math.ceil(x);
    d = Math.pow(x, 2);
    e = Math.sqrt(x);
    f = Math.abs(x);
    g = Math.PI;

    maximum = Math.max(x, y, z);
    minimum = Math.min(x, y, z);

    document.getElementById("MathRound").innerHTML = "Math: " + a;
    document.getElementById("MathFloor").innerHTML = "Math Floor: " + b;
    document.getElementById("MathCeil").innerHTML = "Math Ceil: " + c;
    document.getElementById("MathPow").innerHTML = "Math Pow: " + d;
    document.getElementById("MathSqrt").innerHTML = "Math Sqrt: " + e;
    document.getElementById("MathAbs").innerHTML = "Math Abs: " + f;
    document.getElementById("MathPI").innerHTML = "Math PI: " + g;

    document.getElementById("MathMax").innerHTML = "Math Max: " + maximum;
    document.getElementById("MathMin").innerHTML = "Math Min: " + minimum;

} MathFunctions();

// Hypotenuse Calculator 
function HypotenuseCalculator () {

    let a;
    let b;
    let c;

    document.getElementById("HypotenuseSubmitButton").onclick = function () {
        a = document.getElementById("HypotenuseATextBox").value;
        b = document.getElementById("HypotenuseBTextBox").value;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        document.getElementById("HypotenuseCLabel").innerHTML = "Side C: " + c;
    }

} HypotenuseCalculator();

// Counter Program
function CounterProgram () {
    count = 0;

    document.getElementById("DecrementCounterButton").onclick = function () {
        count -=1;
        document.getElementById("CounterLabel").innerHTML = count;
    }

    document.getElementById("IncrementCounterButton").onclick = function () {
        count +=1;
        document.getElementById("CounterLabel").innerHTML = count;
    }

    document.getElementById("ResetCounterButton").onclick = function () {
        count = 0;
        document.getElementById("CounterLabel").innerHTML = count;
    }

} CounterProgram();

// Random Number Generator
function RandomNumberGenerator () {

    let x;
    let y;
    let z;

    document.getElementById("RandomNumberGeneratorButton").onclick = function () {

        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;
        z = Math.floor(Math.random() * 100) + 1;

        document.getElementById("XLabel").innerHTML = "X: " + x;
        document.getElementById("YLabel").innerHTML = "Y: " + y;
        document.getElementById("ZLabel").innerHTML = "Z: " + z;
   
    }

} RandomNumberGenerator();

/* String Properties and Methods

    - String Properties and Methods are used to manipulate strings:  
        - .length - Returns the length of a string.
        - .indexOf() - Returns the index of (the position of) the first occurrence of a specified text in a string.
        - .lastIndexOf() - Returns the index of the last occurrence of a specified text in a string.
        - .search() - Searches a string for a specified value, and returns the position of the match.
        - .charAt() - Returns the character at the specified index (position) in a string.
        - .concat() - Joins two or more strings, and returns a new joined strings. [string1, string2, ..., stringX]
        - .trim() - Removes whitespace from both sides of a string.
        - .toUpperCase() - Converts a string to uppercase letters.
        - .toLowerCase() - Converts a string to lowercase letters.
        - .split() - Splits a string into an array of substrings.
        - .slice() - Extracts a part of a string and returns a new string. [start, end]
        - .replace() - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. [oldValue, newValue]
        - .replaceAll() - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. [oldValue, newValue]

*/
function StringPropertiesAndMethods () {

    let str = "Hello World World!";

    let strLength = str.length;
    let strIndex = str.indexOf("World");
    let strLastIndex = str.lastIndexOf("World");
    let strSearch = str.search("World");

    // Method Chaining
    let strCharAt = str.charAt(9).toUpperCase().trim();

    let strConcat = str.concat(" ", "I am a string!");
    let strTrim = str.trim();
    let strUpperCase = str.toUpperCase();
    let strLowerCase = str.toLowerCase();
    let strSplit = str.split(" ");
    let strSlice = str.slice(6, 11);
    let strSliceIndexofFirst = str.slice(0, str.indexOf(" "));
    let strSliceIndexofLast = str.slice(str.lastIndexOf(" ") + 1);

    let phoneNumber = "123-456-7890";
    let strReplace = phoneNumber.replace("-", ".");
    let strReplaceAll = phoneNumber.replaceAll("-", ".");

    document.getElementById("String").innerHTML = "String : " + str;

    document.getElementById("StringLength").innerHTML = "String Length: " + strLength;
    document.getElementById("StringIndexOf").innerHTML = "String Index Of 'World': " + strIndex;
    document.getElementById("StringLastIndexOf").innerHTML = "String Last Index Of 'World': " + strLastIndex;
    document.getElementById("StringSearch").innerHTML = "String Search 'World': " + strSearch;
    document.getElementById("StringCharAt").innerHTML = "String Char  '9': " + strCharAt;

    document.getElementById("StringConcat").innerHTML = "String Concat at 'end or str' : " + strConcat;
    document.getElementById("StringTrim").innerHTML = "String Trim: " + strTrim;
    document.getElementById("StringUpperCase").innerHTML = "String Upper Case: " + strUpperCase;
    document.getElementById("StringLowerCase").innerHTML = "String Lower Case: " + strLowerCase;
    document.getElementById("StringSplit").innerHTML = "String Split: " + strSplit;
    document.getElementById("StringSlice").innerHTML = "String Slice: " + strSlice;
    document.getElementById("StringSliceIndexofFirst").innerHTML = "String Slice Index Of First: " + strSliceIndexofFirst;
    document.getElementById("StringSliceIndexofLast").innerHTML = "String Slice Index Of Last: " + strSliceIndexofLast;

    document.getElementById("PhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
    document.getElementById("StringReplace").innerHTML = "String Replace: " + strReplace;
    document.getElementById("StringReplaceAll").innerHTML = "String Replace All: " + strReplaceAll;

} StringPropertiesAndMethods();

/* Loops

    - Loops are used to execute the same block of code again and again, as long as a certain condition is met.
    - Loops are handy, if you want to run the same code over and over again, each time with a different value.
    - Loops are often used in programming to repeat a specific block of code.
    - JavaScript supports different kinds of loops:
        - for - loops through a block of code a number of times
        - for/in - loops through the properties of an object
        - for/of - loops through the values of an iterable object
        - if/else - executes a block of code, if a specified condition is true
        - switch - marks a block of code to be executed, depending on different cases
        - while - loops through a block of code while a specified condition is true
        - do/while - also loops through a block of code while a specified condition is true
*/


/* If Statement 

    - The if statement executes a statement if a specified condition is truthy. 
        If the condition is falsy, another statement can be executed.

    - Syntax:
        if (condition) {
            statement_1;
        } else {
            statement_2;
        }            
*/

function IfElseStatements () {

    let age = 65;
    let online = true;
    if (age >= 65 && online == true) {
        document.getElementById("IfElseStatements").innerHTML = "You are a senior citizen! And you are online!";
    } 
    else if (age < 65 && age >= 18) {
        document.getElementById("IfElseStatements").innerHTML = "You are an adult!";
    }
    else if (age < 18 && age >= 0) {
        document.getElementById("IfElseStatements").innerHTML = "You are a child!";
    }
    else if (age < 0 ) {
        document.getElementById("IfElseStatements").innerHTML = "You are not born yet!";
    }
    else {
        document.getElementById("IfElseStatements").innerHTML = "You are not a senior citizen!";
    }

} IfElseStatements();

/* Check Box

*/

function CheckBox () {

    document.getElementById("CheckBoxButton").onclick = function () {
        
        const checkBox = document.getElementById("CheckBox");
        if (checkBox.checked) {
            document.getElementById("CheckBoxLabel").innerHTML = "Selected";
        }
    }
}