// Assinment-5-7

// Qyestion-1
let sum1 = +prompt("First number");
let sum2 = +prompt("Secoond number"); 
alert ("Sum of " + sum1 + " and " + sum2 + " is " +( sum1 + sum2));


// Question-2
let num1 = +prompt("First number");
let num2 = +prompt("Secoond number"); 
alert ("Subtract of " + num1 + " and " + num2 + " is " + (num1 - num2));
alert ("Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2);
alert ("Division of " + num1 + " and " + num2 + " is " + num1 / num2);
alert ("Modulus of " + num1 + " and " + num2 + " is " + num1 % num2);


// Question-3
let numValue = 3;
document.write ("Value after variable declaration is " + undefined + "<br />");
document.write ("Initial value: " + numValue++ + "<br />");
document.write ("Value after increment is: " + numValue + "<br />");
document.write ("Value after addition is: " + (numValue + 7) + "<br />");
document.write ("Value after decrement is: " + (--numValue + 7) + "<br />");
document.write ("The remainder is: " + numValue % 7);


// Question-4
let ticketPrice = +prompt("How much price of tickets ");
let ticketBuying = +prompt("How many tickets ");
// let ticketPrice = 600;
// let ticketBuying = 5;
document.write ("Totalo cost to buy " + ticketBuying + " tickets to a movie is " + ticketBuying * ticketPrice + " PKR"); 


// Question-5
let table = +prompt('please enter a table name');
let count = 1;
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ + "<br />"
);
document.write(
    table + " x " + count + " = " + table * count++ 
);



// Queston-6
let PriceOfItem1 = 560;
let PriceOfItem2 = 200;
let OrderedQuantityOfItem1 = 2;
let OrderedQuantityOfItem2 = 5;
let ShippingCharges = 150;
document.write ("<h1> Shipping Cart </h1>")
document.write ("Price of item 1 is " + PriceOfItem1 +" <br />");
document.write ("Quantity of item 1 is " + OrderedQuantityOfItem1 +" <br />");
document.write ("Price of item 2 is " + PriceOfItem2 +" <br />");
document.write ("Quantity of item 2 is " + OrderedQuantityOfItem2 +" <br />" +" <br />");
document.write ("Shipping Charges " + ShippingCharges +" <br />" +" <br />");
document.write ("Total cost of your order is " + (PriceOfItem1 * OrderedQuantityOfItem1 + PriceOfItem2 * OrderedQuantityOfItem2 + ShippingCharges) + " PKR" );



// Question-7
let totalMarks = 1200;
let obtainedMarks = 900;
document.write ("<h1> Mark Sheet </h1>")
document.write ("Total Marks : " + totalMarks +" <br />");
document.write ("Obtained Marks : " + obtainedMarks +" <br />");
document.write ("Percentae : " +  obtainedMarks * 100 / totalMarks  +"%");



// Question-8
let saudiRiyals1InPkr = 28;
let usDollars1InPkr = 104;
let saudiRiyalsConverts = 25;
let usDollarsConverts = 10;
document.write ("<h1> Currency in PKR </h1>")
document.write ("Total currency in PKR : " + (saudiRiyals1InPkr * saudiRiyalsConverts + usDollars1InPkr * usDollarsConverts));



// Question-9
let number = +prompt("Choose any number");
alert (number + 5 * 10 / 2);



// Question-10 
let currentYear = prompt("Current Year");
let birthYear = prompt("Birt Year");
document.write ("<h1> The Age Calculator </h1>");
document.write ("Current Year " + currentYear +" <br />");
document.write ("Birth Year " + birthYear +" <br />" + " <br />");
document.write ("They are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear + 1) +" years old");



// Question-11
let valueOfA = 10;
document.write ("Result :" + " <br />");
document.write ("The value of a is : " + valueOfA + " <br />");
document.write ("--------------------------" + " <br />" + " <br />");
document.write ("The value of ++a is : " + ++valueOfA + " <br />");
document.write ("Now the value of a is : " + valueOfA + " <br />" + " <br />" + " <br />");
document.write ("The value of a++ is : " + valueOfA++ + " <br />");
document.write ("Now the value of a is : " + valueOfA + " <br />" + " <br />" + " <br />");
document.write ("The value of --a is : " + --valueOfA + " <br />");
document.write ("Now the value of a is : " + valueOfA + " <br />" + " <br />" + " <br />");
document.write ("The value of a-- is : " + valueOfA-- + " <br />");
document.write ("Now the value of a is : " + valueOfA);



// Question-12
let a =2; 
let b =1;
document.write (--a + "<br >");
document.write (--a - --b + "<br >");
document.write (--a - --b + ++b + "<br >");
document.write (--a - --b + ++b + b-- + "<br >");




