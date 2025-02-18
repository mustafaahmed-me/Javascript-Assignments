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
let userInput = prompt("Enter the item you want to search:").toLowerCase();

if (bakeryItems.includes(userInput)) {
    alert(userInput + " is available in the bakery.");
} else {
    alert(userInput + " is not available in the bakery.");
}



// Question-10
for(let i = 5; i <= 100; i = i + 5 ){
        console.log(i);
}



// Question-11
// let count = [1,2,3,4,5,6,7,8,9,10];
// document.write("<h1>  Counting: </h1>");
// document.write(count);
// let countRev = count.reverse();
// document.write("<h1> Reverse Counting: </h1>");
// document.write(countRev);
// let countEven = count;
// document.write("<h1> Reverse Counting: </h1>");
// document.write(countRev); // not done




// Question-12
// let students = ["Mustafa", "Ali", "Ahmed", "Bilal"];
// let scores = [78,65,49,57];
// let result = [];

// for (let i = 0; i < students.length; i++) {

//     for (let j = 0; j < scores.length; j++) {
//         let fullResult =` ${students[i] + scores[j]}`;
//         result.push(fullResult);
//     }
// }

// document.write ("<td>" + result + "</td>");
// document.write(`<table>
//                 <tr>
//                 <td>
//                 ${result}
//                 </td>
//                 </tr>
//                 </table>`);
//     // document.write("");
// document.write("");



document.body.innerHTML += `
    <table border="1">
        <tr>
            <th>Students</th>
            <th>Scores</th>
        </tr>
        <tr>
            <td>Ali</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Sara</td>
            <td>45</td>
        </tr>
        <tr>
            <td>Mustafa</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Bilal</td>
            <td>70</td>
        </tr>
    </table>
`;





// Question-12
// let A = [ [1,2,3] , [4,5,6] , [7,8,9]];

// for ( let i =0; i < A.length; i++){

//     for ( let J =0; J < A.length; J++){

//     }
// }    not done



// Question-13
// let numList = [4,3,2,1]
// let yourNum = +prompt("Enter a number");
// let totalNum  = []

// for( let i = 0; i < numList.length; i++){
//     let fullNum = `${numList[i],yourNum}`;
//     totalNum.push(fullNum);
// }
// document.write(totalNum);
// not done


// Question-14
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// // let evenNum = false;

// for ( let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0) {
//         // evenNum = true;
//         document.write (nums);
//     }
// }

// // if (evenNum){
    
// // }
// not done 