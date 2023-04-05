/*

Link: 
Table of Contents:
    - Exercise 1: JavaScript Basics

*/

/* Exercise 1: JavaScript Basics:

        1a. Use alert(...) to display 'Good Morning' in a popup.
        1b. Display you name in a popup
        1c. Using math, calculate 10 + 5 in the console.
        1d. Calculate 20 - 5 in the console. 
        1e. Calculate 2 + 2 - 5 in the console.
        1f. Display 'Good Morning!' on the web page.
        1g. Display you name on the web page.
        1h. You order a T-shirt for $10, socks for $8, 
            and dinner plates for $20. 
            Calculate the total cost of your order.
        1i. Your bank account has $100, you spend $20 on lunch,
            $50 on dinner, and earn $200 from your job, 
            Calculate how much money you have.
        
*/

function Exercise1() {

    function OneA () {
        alert('Good Morning');
    }

    function OneB () {
        alert('Dhruv');
    }

    function OneC () {
        console.log(10 + 5);
        a = 10 + 5

        document.getElementById("1C").innerHTML = a;
    }

    function OneD () {
        console.log(20 - 5);
        b = 20 - 5

        document.getElementById("1D").innerHTML = b;
    }

    function OneE () {
        console.log(2 + 2 - 5);
        c = 2 + 2 - 5

        document.getElementById("1E").innerHTML = c;
    }

    function OneF () {
        document.getElementById("1F").innerHTML = 'Good Morning!';
    }

    function OneG () {
        document.getElementById("1G").innerHTML = 'Dhruv';
    }

    function OneH () {
        TShirt = 10;
        Socks = 8;
        Dinner = 20;
        Cost = TShirt + Socks + Dinner;

        document.getElementById("1H").innerHTML = "Total Order Cost: $" + Cost;
    }

    function OneI () {
        let BankAccount = 100;
        let Lunch = 20;
        let Dinner = 50;
        let Job = 200;
        Total = (BankAccount + Job) - Lunch - Dinner;

        document.getElementById("1I").innerHTML = "You have $" + Total + " " + "left in your bank account";
    }

    OneC();
    OneD();
    OneE();
    OneF();
    OneG();
    OneH();
    OneI();
    
} Exercise1()
    

     