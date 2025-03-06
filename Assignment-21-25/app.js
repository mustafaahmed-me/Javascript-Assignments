// // ASSIGNMENT-21-25


// // Question-1
let car = {
    model: "Hilux",
    year: 2023,
    color: "black"
}
console.log(car);



// // Question-2
let user = {
    name: "Mustafa",
    age: 18,
    email: "mustufaahmed450@gmail.com"
}
console.log(user.name);
console.log(user.email);



// // Question-3
car.color = "red";
console.log(car);



// // Question-4
car.price = 7000000;
console.log(car);



// // Question-5
let person = {
    firstName: "Mustafa",
    lastName: " Ahmed"
}
console.log( person.firstName + person.lastName);



// // Question-6
let newText = "The quick brown fox jumps over the lazy dog.";
let oldText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aspernatur.`;

let pEl = document.querySelectorAll('.para-p');

function changePara() {
    for (let i = 0; i < pEl.length; i++) {
        if (pEl[i].innerHTML.toLowerCase() === oldText.toLowerCase()) {
            pEl[i].innerHTML = newText;
        }
        else {
            pEl[i].innerHTML = oldText;
        }
    }
}



// // Question-7
let h2Ele = document.querySelectorAll(".h2");
console.log(h2Ele);

h2Ele.innerHTML = "Updated Title"
// let h2El = document.querySelectorAll('h2');

// let newText = "Hello USD";

// for (let i = 0; i < h2El.length; i++) {
//     h2El[i].innerHTML = newText;
// }




// // Question-8
for (let i = 0; i < 3; i++){
    let liEle = document.querySelectorAll(".list");
    console.log(liEle[i].innerHTML);
}



// Question-9
let firstName = prompt("your first name ");
let lastName = prompt("your last name ");
let fullName = firstName + lastName ; 
console.log(fullName);



// Question-10
let favMob = prompt("What is your favourite mobile");
console.log(`My favourite phone is ${favMob}`);
console.log(`length of string ${favMob.length}:`);




// Question-11
let city = "Pakistani";
console.log(`String ${city}`);
console.log(`Index of 'n' ${city.indexOf("n")}`);



// Question-12
let word = "Hello World";
console.log(`String ${word}`);
console.log(`Last Index of 'n' ${word.lastIndexOf("l")}`);



// Question-13
let citis = "Pakistani";
console.log(`String ${citis}`);
console.log(`Character at index ${citis.indexOf("i")}: ${citis[3]}`); 



// Question-14
let cWord = "Hyderabad";
let repWord = "Hyder";
console.log(`City: ${cWord}`);
let chgWord = cWord.indexOf(repWord);

if (repWord !== -1) {
    cWord = cWord.slice(0 , repWord) + "Islam" + cWord.slice(chgWord + repWord.length);
}
console.log(`After Replacement: ${cWord}`);



// Question-15
let message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message);
message = message.replaceAll("and", "$");
console.log(`After Replacement: ${message}`);



// Question-16
let nums = "472";
console.log("Value: " + nums);
console.log("Type of: " + typeof(nums));
nums = Number(nums);
console.log("Value: " + nums);
console.log("Type of: " + typeof(nums));



// Question-17
let inputUsr = prompt("Write any word");
console.log("User Input: " + inputUsr);
console.log("Upper Case: " + inputUsr.toUpperCase());



// Question-18
let sim = prompt("Write any sim name");
console.log("User Input: " + sim.toUpperCase());
console.log("Lower Case: " + sim.toLowerCase());



// Question-19
let userInp = "javascript";
console.log(`User Input: ${userInp}`);
let titleCase = userInp.slice(0,1).toUpperCase() + userInp.slice(1).toLowerCase();
console.log(`Title Case: ${titleCase}`);



// Question-20
let numbr = 35.36;
console.log(`Number ${numbr}`);
numbr = numbr.toString();
console.log( "Result " + numbr);



// Question-21
let a = "3";
let b = "3";
console.log("A is " + a);
console.log("B is " + b);
console.log("A + B is " + a + b);



// Question-22
let a1 = "3";
let b1 = "3";
console.log("A is " + a1);
console.log("B is " + b1);
console.log("A - B is " + (a1 - b1));



// Question-23
let iftar = ["pakora", "roll", "fruit chaat", 'samosa', 'rooh afza'];
let iftarItem = document.querySelectorAll(".iftar-item")[0];
let searchElement = document.querySelectorAll('input')[0];

function searchIftar() {
    let searchkeyword = searchElement.value.toLowerCase();
    if (iftar.includes(searchkeyword)) {
        let index = iftar.indexOf(searchkeyword);
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is available at index ${index}`;
    }
    else {
        iftarItem.innerHTML = `Your favorite item ${searchkeyword} is not available`;
    }
}




// // Question-24
let uniName = ["University Of Karachi"];
let letters = uniName.split("");
letters.forEach(letter => console.log(letter));




// Question-25
let cityName = "Pakistan";
console.log(cityName[7]);
