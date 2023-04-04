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
        - Check Properties
        - Radio Properties
        - Switch Statements
        - And Or Operators
        - Not Operator
        - Ternary Operator
        - While Loops
        - Do While Loops
        - For Loops
        - For In Loops
        - Break and Continue
        - Nested Loops
        - NestedLoopsRectangle
        - Functions
        - Return Statement
        - TernaryOperator
        - Variable Scope
        - Template Literals
        - ToLocaleString
        - Number Guessing Game
        - Temperature Converter
        - Arrays
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

// Check Properties

function CheckBox () {

    document.getElementById("CheckBoxButton").onclick = function () {
        
        const checkBox = document.getElementById("CheckBox");
        
        if (checkBox.checked) {
            document.getElementById("CheckBoxLabel").innerHTML = "Check Box Selected";
        }
        else {
            document.getElementById("CheckBoxLabel").innerHTML = "Check Box Not Selected";
        }
    }
} CheckBox();

// Radio Properties
function RadioButton () {

    document.getElementById("RadioButtonButton").onclick = function () {
        
        const VisaRadioButton = document.getElementById("VisaRadioButton");
        const MasterCardRadioButton = document.getElementById("MasterCardRadioButton");
        const AmericanExpressRadioButton = document.getElementById("AmericanExpressRadioButton");

        if (VisaRadioButton.checked) {
            document.getElementById("RadioButtonLabel").innerHTML = "Visa Card Selected";
        }
        else if (MasterCardRadioButton.checked) {
            document.getElementById("RadioButtonLabel").innerHTML = "MasterCard Card Selected";
        }
        else if (AmericanExpressRadioButton.checked) {
            document.getElementById("RadioButtonLabel").innerHTML = "American Express Card Selected";
        }
        else {
            document.getElementById("RadioButtonLabel").innerHTML = "No Card Selected";
        }
    }
    
} RadioButton();

/* Switch Statement

    - The switch statement executes a block of code depending on different cases.
    - The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.
    - Use the switch statement to select one of many code blocks to be executed.
    - This is the perfect solution for long, nested if/else statements.
    - Syntax:
        switch(expression) {
            case x:
                // code block
                break;
            case y:
                // code block
                break;
            default:
                // code block
        }
*/

function SwitchStatement () {
    
    let day = new Date().getDay();
    let dayName;

    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown Day";
    }

    let grade = "B";
    let gradeName;

    switch (grade) {
        case "A":
            gradeName = "Excellent!";
            break;
        case "B":
            gradeName = "Good!";
            break;
        case "C":
            gradeName = "Fair!";
            break;
        case "D":
            gradeName = "Poor!";
            break;
        case "F":
            gradeName = "Fail!";
            break;
        default:
            gradeName = "Unknown Grade!";
    }
    
    document.getElementById("SwitchStatementDate").innerHTML = "Today is " + dayName;
    document.getElementById("SwitchStatementGrade").innerHTML = gradeName;
    
} SwitchStatement();

/* And Or Operators

    - Gives us the ability to combine two or more conditions.
    - The && operator (logical and) BOTH conditions MUST be true.
    - The || operator (logical or) EITHER conditions CAN be true.

*/

function AndOrOperators () {

    let temperature = 75;
    let sunny = false;

    if (temperature >= 70 && temperature <= 80 && sunny) {
        document.getElementById("AndOperator").innerHTML = "The weather is good!";
    }
    else {
        document.getElementById("AndOperator").innerHTML = "The weather is bad!";
    }

    let age = 65;

    if (age <= 18 || age >= 65) {
        document.getElementById("OrOperator").innerHTML = "You are either a child or a senior citizen!";
    }
    else {
        document.getElementById("OrOperator").innerHTML = "You are neither a child nor a senior citizen!";
    }

} AndOrOperators();

/* Not Operator

    - Gives us the ability to reverse a condition.
        True -> False or False -> True
    - The ! operator (logical not) reverses the value of a condition.
*/

function NotOperator () {

    let age = 65;


    if (!(age >= 18 && age <= 65)) {
        document.getElementById("NotOperator").innerHTML = "You are not an adult!";
    }

    else {
        document.getElementById("NotOperator").innerHTML = "You are an adult!";
    }

} NotOperator();

/* Ternary Operator

    - Gives us the ability to write a conditional statement in one line.
    - Syntax:
        condition ? expression_1 : expression_2;
        
        If condition is true, the operator returns the value of expression_1; otherwise, it returns the value of expression_2.
*/
function TernaryOperator () {
    
    let age = 65;
    let message = (age >= 65) ? "You are a senior citizen!" : "You are not a senior citizen!";
    document.getElementById("TernaryOperator").innerHTML = message;
    
} TernaryOperator();

/* While Loop 

    - The while loop loops through a block of code as long as a specified condition is true or infinite number of times.
    - The while loop repeats statements while a condition is true.
    - Syntax:
        while (condition) {
            // code block to be executed
        }
*/
function WhileLoop () {
    
    let i = 0;
    let text = "";
    
    // While i is less than 10, add 1 to i and add the number to the text variable.
    while (i < 10) {
        text += "<br>The number is: " + i;
        i++;
    }
    
    document.getElementById("WhileLoop").innerHTML = text;
    
} WhileLoop();

/* Do While Loop

    - The do/while loop is a variant of the while loop.
    - This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
    - Syntax:
        do {
            // code block to be executed
        }
        while (condition);
*/

function DoWhileLoop () {
        
    let userName;

    do {
        userName = prompt("Please enter your name:");
    }
    while (userName == null || userName == "");
    
    document.getElementById("DoWhileLoop").innerHTML = "Hello " +  userName;
    
} DoWhileLoop();

/* For Loop

    - The for loop loops through a block of code a certain number of times.
    - The for loop is used when you know in advance how many times the script should run.
    - Syntax:
        for (statement 1; statement 2; statement 3) {
            // code block to be executed
        }
*/

function ForLoop () {
    
    // set i to 10, if i is greater than 0, subtract 1 to i, continue until i == 0 or less then 0 , and display i.
    for (let i = 10; i > 0; i--) {
        document.getElementById("ForLoop").innerHTML += i + "<br>";
    }

    document.getElementById("ForLoop").innerHTML += "Happy New Year!";

} ForLoop();

/* For In Loop

    - The for/in statement loops through the properties of an object.
    - Syntax:
        for (variable in object) {
            // code block to be executed
        }
*/

function ForInLoop () {
        
    let person = {fname:"John", lname:"Doe", age:25};

    let text = "";

    // x is the property name of the object.
    for (let x in person) {

        // make text equal to the property name and the value of the property.
        text += person[x] + " ";
    }

    document.getElementById("ForInLoop").innerHTML = text + " Years Old.";

} ForInLoop();

/* Break & Continue Statements

    - The break statement "jumps out" or break" of a loop entirely.
    - The continue statement "jumps over" or "skips" one iteration in the loop.
*/

function BreakContinue () {

    let text = "";

    // loop through 0 to 10
    for (let i = 0; i <= 10; i++) {

        // if i is equal to 8, break out of the loop.
        if (i == 8) {
            break;
        }

        // if i is equal to 5, skip to the next iteration.
        if (i == 5) {
            continue;
        }

        // add i to the text variable.
        text += i + "<br>";
    }

    document.getElementById("BreakContinue").innerHTML = text;

} BreakContinue();

/* Nested Loops

    - A nested loop is a loop inside a loop.
    - The "inner loop" will be executed one time for each iteration of the "outer loop".
*/

function NestedLoops () {
    
    let num = "";

    // i is the outer loop.
    for (let i = 0; i <= 3; i++) {

        // j is the inner loop.
        for (let j = 0; j <= 3; j++) {

            // add i and j to the text variable.
            num += i + " " + j + "<br>";
        }
    }

    document.getElementById("NestedLoops").innerHTML += num;

} NestedLoops();

function NestedLoopsRectangle () {
    
    let symbols;
    let rows;
    let columns;

    document.getElementById("NestedLoopsRectangleButton").onclick = function () {
        symbols = document.getElementById("NestedLoopsRectangleSymbols").value;
        rows = document.getElementById("NestedLoopsRectangleRows").value;
        columns = document.getElementById("NestedLoopsRectangleColumns").value;

        for (let i = 1; i <= rows; i ++) { 
            for (let j = 1; j <= columns; j ++) {
                document.getElementById("NestedLoopsRectangle").innerHTML += symbols;
            }
            document.getElementById("NestedLoopsRectangle").innerHTML += "<br>";
        }
    }

} NestedLoopsRectangle();

/* Functions

    - A function is a block of code designed to perform a particular task.
    - A JavaScript function is executed when "something" invokes it (calls it).
    - Syntax:
        function name(parameter1, parameter2, parameter3) {
            // code to be executed
        }
*/
function Functions () {
    
    function StartProgram() {
        let Name = "Dhruv";
        let Age = 21;

        HappyBirthday(Name, Age);
    }
    
    function HappyBirthday (Name, Age) {
        document.getElementById("HappyBirthday").innerHTML = "Happy Birthday to you!";
        document.getElementById("HappyBirthday2").innerHTML += "<br>Happy Birthday to you!";
        document.getElementById("HappyBirthday3").innerHTML += "<br>Happy Birthday dear " + Name + "!";
        document.getElementById("HappyBirthday4").innerHTML += "<br>Happy Birthday to you!";
        document.getElementById("HappyBirthday5").innerHTML = "<br>Happy Birthday " + Name + "! You are " + Age + " years old!";
    }
    
    StartProgram();
    
} Functions();

/* Return Statement

    - The return statement stops the execution of a function and returns a value from that function.
    - Syntax:
        return expression;
*/
function ReturnStatement () {
    
    let area;
    let width;
    let height;

    function calculateArea (width, height) {
        return width * height;
    }

    document.getElementById("ReturnStatementButton").onclick = function () {
        width = document.getElementById("ReturnStatementWidth").value;
        height = document.getElementById("ReturnStatementHeight").value;
        area = calculateArea(width, height);
        document.getElementById("ReturnStatement").innerHTML = "The area is " + area;
    } 
} ReturnStatement();

/* Ternary Operator

    - The conditional (ternary) operator is the only JavaScript operator that takes three operands.
    - This operator is frequently used as a shortcut for the if statement.
    - Syntax:
        variableName = (condition) ? value1:value2
        returns value1 if condition is true, and value2 if condition is false.
*/ 
function TernaryOperator () {
        
    let adult = checkAge(21);
    checkWinner(false);

    function checkAge(age) {
        /*
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
        */
        return (age >= 18) ? true : false ;
    }

    document.getElementById("TernaryOperatorAge").innerHTML = "You are an adult: " + adult;
    
    function checkWinner (isWinner) {
        /*
        if (isWinner) {
            return "Winner";
        }
        else {
            return "Loser";
        }
        */
        return (isWinner) ? "Winner" : "Loser";
    }

    document.getElementById("TernaryOperatorWinner").innerHTML = "You are a: " + checkWinner(true);
} TernaryOperator();

/* Variable Scope

    - In JavaScript there are two types of scope:
        - Local scope
        - Global scope
    - JavaScript has function scope: Each function creates a new scope.
    - Scope determines the accessibility (visibility) of these variables.
    - Variables defined inside a function are not accessible (visible) from outside the function.
    - Local variables have Function scope: They can only be accessed from within the function.
    - Global variables have Global scope: They can be accessed (used) from anywhere in the JavaScript program.
    - Variables declared Globally (outside any function) have Global scope.
    - Variables declared Locally (inside a function) have Local scope.

    let = variables declared inside a block {} cannot be accessed from outside the block.
    var = variables are limited to a function (){} or global scope.

    global variables = is declared outside any function
    local variables = is declared within a function

    var will change the website global variable
*/

function VariableScope () {
    
    let globalVariable = "Global Variable";

    document.getElementById("VariableScopeGlobalVariable").innerHTML = globalVariable;

    document.getElementById("VariableScopeButton").onclick = function () {
        let localVariable = "Local Variable";
        document.getElementById("VariableScopeLocalVariable").innerHTML = localVariable;
    }
    
} VariableScope();

/* Template Literal
    - Template literals are string literals allowing embedded expressions.
    - You can use multi-line strings and string interpolation features with them.
    - Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.
    - Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
    - The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
    - The default function just concatenates the parts into a single string.

    - Delimited with (`) instead of double or single quotes also embedded variables and expressions.

    - Syntax:
        `string text`
        `string text line 1
        string text line 2`
        `string text ${expression} string text`
        tag `string text ${expression} string text`
*/

function TemplateLiterals () {
        
    let name = "Dhruv";
    let age = 21;
    let job = "Student";
    let state = "Alabama";

    document.getElementById("TemplateLiterals").innerHTML = `Hello, my name is ${name}. I am ${age} years old. I am a ${job}. I live in ${state}.`;
} TemplateLiterals();

/* toLocaleString()

    - The toLocaleString() method converts a Date object into a string, using locale settings.
    - The default language depends on the locale setup on your computer.
    - The toLocaleString() method returns a string with a language sensitive representation of this date.
    
    - Returns a string with a language sensitive representation of this date.
    - Syntax:
        dateObj.toLocaleString()
        dateObj.toLocaleString(locales)
        dateObj.toLocaleString(locales, {options})

    - Parameters:
        locales = Optional. A string with a BCP 47 language tag, or an array of such strings.
        options = Optional. An object with some or all of the following properties:
            - localeMatcher
            - timeZone
            - hour12
            - formatMatcher
            - weekday
            - era
                - 

*/
function ToLocaleString () {

    let date = new Date();
    let date2 = new Date("2020-01-01");
    let myNum = 123456.789;
    let percent = 0.1234;
    let temp = 22.5;

    document.getElementById("toLocaleString").innerHTML = date.toLocaleString();
    document.getElementById("toLocaleString2").innerHTML = date2.toLocaleString();
    document.getElementById("toLocaleString3").innerHTML = myNum.toLocaleString("en-US"); // US English uses comma as decimal separator and period for thousands
    document.getElementById("toLocaleString4").innerHTML = myNum.toLocaleString("hi-IN"); // Hindi Indian English uses lakhs and crores for thousands and millions
    document.getElementById("toLocaleString5").innerHTML = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US Dollar
    document.getElementById("toLocaleString6").innerHTML = percent.toLocaleString(undefined, {style: "percent"}); //  
    document.getElementById("toLocaleString7").innerHTML = temp.toLocaleString({style: "unit", unit: "celsius" }); // 
} ToLocaleString();

/* Number Guessing Game */

function NumberGuessingGame () {

    const answer = Math.floor(Math.random() * 10) + 1;
    let guesses = 0;

    document.getElementById("NumberGuessingGameButton").onclick = function () {
        let guess = document.getElementById("NumberGuessingGameGuesses").value;
        guesses++;
        if (guess == answer) {
            document.getElementById("NumberGuessingGame").innerHTML = `You guessed the number ${answer} in ${guesses} guesses!`;
        }
        else if (guess > answer) {
            document.getElementById("NumberGuessingGame").innerHTML = "Too high!";
        }
        else if (guess < answer) {
            document.getElementById("NumberGuessingGame").innerHTML = "Too low!";
        }
    }

} NumberGuessingGame();

/* Temperature Converter 

    Number - Coverts a string to a number.
    Degree Symbol - Press and hold the Alt key and type 0176 on the numeric keypad.
*/

function TemperatureConverter () {
    let temp ;
    let Celsius;
    let Fahrenheit;
    let Kelvin;

    function ToCelsius(temp) {
        return (5/9) * (temp - 32);
    }

    function ToFahrenheit(temp) {
        return (temp * 9/5) + 32;
    }

    function ToKelvin(temp) {
        return (temp + 273.15);
    }

    document.getElementById("TemperatureConverterButton").onclick = function () { 
        temp = document.getElementById("TemperatureConverterInput").value;
        Celsius = document.getElementById("CelsiusOption").value;
        Fahrenheit = document.getElementById("FahrenheitOption").value;
        Kelvin = document.getElementById("KelvinOption").value;
        SelectOption = document.getElementById("TemperatureConverterSelect").value

        if (SelectOption == Celsius){
            
            temp = Number(temp)
            temp = ToCelsius(temp);
            document.getElementById("TemperatureConverter").innerHTML = temp + "°C";
        }
        else if (SelectOption == Fahrenheit) {
            temp = Number(temp)
            temp = ToFahrenheit(temp);
            document.getElementById("TemperatureConverter").innerHTML = temp + "°F";
        }
        else if (SelectOption == Kelvin) {
            temp = Number(temp)
            temp = ToKelvin(temp);
            document.getElementById("TemperatureConverter").innerHTML = temp + "°K";
        }
        else {
            document.getElementById("TemperatureConverter").innerHTML = "Please select an option";
        }
    }
} TemperatureConverter();

/* Array 

    - Arrays are a special type of objects.
    - The typeof operator in JavaScript returns "object" for arrays.
    - But, JavaScript arrays are best described as arrays.
    - Arrays use numbers to access its "elements".
    - In JavaScript, arrays use numbered indexes.
    - In JavaScript, objects use named indexes.
    - Arrays are a special type of objects, with numbered indexes.
    - If you put a number in the square brackets, it will return the item at that position in the array.
    - If you put a name in the square brackets, it will return the value associated with that name.
    - Arrays are a special type of objects, with the predefined methods to work with arrays.    

    - Thinks of it as a variable that can store multiple values

    - Syntax:
        let array_name = [item1, item2, ...]; // Array literal
        let array_name = new Array(item1, item2, ...); // Array constructor
    
    - Array elements are accessed using their index number:
        array_name[index]
*/

function array () {

    

} array();





