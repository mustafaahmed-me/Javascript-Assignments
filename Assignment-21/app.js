// ASSIGNMENT-21



// Question-1
let car = {
    model: "Hilux",
    year: 2023,
    color: "black"
}
console.log(car);



// Question-2
let user = {
    name: "Mustafa",
    age: 18,
    email: "mustufaahmed450@gmail.com"
}
console.log(user.name);
console.log(user.email);



// Question-3
car.color = "red";
console.log(car);



// Question-4
car.price = 7000000;
console.log(car);



// Question-5
let person = {
    firstName: "Mustafa",
    lastName: " Ahmed"
}
console.log( person.firstName + person.lastName);



// Question-6
let parEle = document.querySelectorAll(".para-p");
console.log(parEle);

parEle.innerHTML = "Hello Javascript"



// Question-7
let h2Ele = document.querySelectorAll(".h2");
console.log(h2Ele);

h2Ele.innerHTML = "Updated Title"



// Question-8
for (let i = 0; i < 3; i++){
    let liEle = document.querySelectorAll(".list");
    console.log(liEle[i]);
}
