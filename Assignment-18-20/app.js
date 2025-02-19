// // Assignment-18-20

// // Question-1
for(let i = 0; i <= 5; i++ ){
    document.write(`Hello World ${i}` + "<br />");
}



// // // Question-2
for(let i = 0; i <= 10; i++ ){
    document.write(i + "<br />");
}



// // Question-3
let tableNum = +prompt("Enter a table number");
let numLength = +prompt("Enter a length of table");

for (let count = 0; count <= numLength; count++){
    document.write(`${tableNum} x ${count} = ${tableNum * count}`);
    document.write("<br />");
}



// // Question-4
let mobile = ["Nokia", "Apple", "Oppo", "Samsung"];

for (let i = 0; i < mobile.length; i++) {
    console.log(i);
    console.log(mobile[i]);
}


// Question-5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    // console.log(i);
    document.write(fruits[i]);
    document.write("<br />");
}

for (let i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i]);
    document.write("<br />");
}



// Question-6
let cities = ["Karachi", "Lahore", "Peshawar"];
let yourCity = prompt("Where do you live");
let isClean = false;

for ( let i =  0; i < cities.length; i++){
    if ( cities[i].toLowerCase() === yourCity.toLowerCase()){
        isClean = true;  
        break;
    }
}

if (isClean){
    console.log("You live in clean city"); 
}
else {
    console.log("You do not live in clean city"); 
}


// // Question-7
let firstName = ["Mustafa", "Ali", "Abid"];
let lastName = ["Ahmed", "Hamza", "Shah"];
let names = [];

for (let i = 0; i < firstName.length; i++) {
    
    for (let j = 0; j < lastName.length; j++) {
   let fullName = `${firstName[i]}${lastName[j]}`;
   names.push(fullName);

    }
}
console.log(names);




// Question-8
let N = prompt("Enter the number of items:");
let itemsArray = [];

for (let i = 0; i < N; i++) {
    let item = prompt(`Enter item ${i}:`);
    itemsArray.push(item);
}

document.write("<h3>Items List:</h3>");

for (let i = 0; i < itemsArray.length; i++) {
    document.write("<li>" + itemsArray[i] + "</li>");
}



// Question-9
let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"]
let youWantItem = prompt("Welcome to Mustafa Bakery! What item do you want");
let itemsHave = false;

for ( let i = 0; i < bakeryItem.length; i++){
    if ( bakeryItem[i].toLowerCase() === youWantItem.toLowerCase()){
        itemsHave = true;
        break;
    }
}

if (itemsHave) {
    console.log("Is available at index in our bakery ");
}
else {
    console.log(`We are sorry not available in my bakery` );
}

let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let usrInput = prompt("Enter the item you want to search:").toLowerCase();

if (bakeryItems.includes(usrInput)) {
    alert(usrInput + " is available in the bakery.");
} else {
    alert(usrInput + " is not available in the bakery.");
}



// Question-10
for(let i = 5; i <= 100; i = i + 5 ){
        console.log(i);
}



// Question-11
let count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for ( let i = 0; i < count.length; i++){
    if (count[i] % 2 === 1) {
        document.write(i + "   is even <br />");

    }
    else {
        document.write(i + " is odd <br />");
    }
}
document.write("<h1>  Counting: </h1>");
document.write(count);
let countRev = count.reverse();
document.write("<h1> Reverse Counting: </h1>");
document.write(countRev);




// Question-12
let students = ["Mustafa", "Ali", "Ahmed", "Bilal"];
let scores = [78,65,49,57];

for (let i = 0; i < students.length; i++) {
    let result = students[i] + scores[i];
    document.write(result);
}





// Question-13
let dimArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < dimArr.length; i++) {
    let insideArr = dimArr[i];
    for (let j = 0; j < insideArr.length; j++) {
        console.log(insideArr[j]);
    }

}   

 


// Question-14
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for ( let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0) {
        console.log(i + " is even");

    }
    else {
        console.log(i + " is odd");
    }
}



// Question-15
let numArr = [24, 53, 78, 91, 12, 1000, 900, 7943];
let lrgNum;
let smlNum;

for (let i = 0; i < numArr.length; i++) {
    let currentNum = numArr[i];
    if (!lrgNum || currentNum > lrgNum) {
        lrgNum = currentNum;
    }

    if (!smlNum || currentNum < smlNum) {
        smlNum = currentNum;
    }
}

console.log(lrgNum, smlNum);




// Question-16
let userInput = +prompt('enter number');
let multiple = 1;

for (let i = 1; i <= userInput; i++) {
    console.log(i);
    multiple = multiple * i;
    // multiple *= i;
}
console.log(multiple);




// Question-17
let myNum = [5,4,3,2,1];
for (let i = 0; i < myNum.length; i = i + 0.5) {
    console.log(i);
}