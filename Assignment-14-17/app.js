// Assignment-14-17

// Question-1
let studentName = [];
studentName.push("Ali");
studentName.push("Mustafa");
studentName.push("Ahmed");
console.log(studentName);



// Question-2
let fruits = ["Apple", "Banana", "Grapes", "Mango", "Oranges"];
console.log(fruits);



// Question-3
let luckyNumbers = [500, 100, 700, 900];
console.log(luckyNumbers);



// Question-4
let boolArr = [true, false, true, false];
console.log(boolArr);



// Question-5
let mixArr = ['Apple', 'Banana', 1, 9, 11, 200, false, ['USA', "Pakistan", "Bangladesh"]];
console.log(mixArr);



// Question-6
let pakNetworks = ["Jazz", "Ufone", "Telecom", "Zong"];
console.log(pakNetworks);



// Question-7
let qualification = ["SSC", "HSC", "BSC", "BCOM", "BS", "MS", "M.Phil", "PhD"];
document.write ("<h1> Qualification: </h1>")
document.write("1) " + qualification[0] + "<br />");
document.write("2) " + qualification[1] + "<br />");
document.write("3) " + qualification[2] + "<br />");
document.write("4) " + qualification[3] + "<br />");
document.write("5) " + qualification[4] + "<br />");
document.write("6) " + qualification[5] + "<br />");
document.write("7) " + qualification[6] + "<br />");
document.write("8) " + qualification[7]);




// Question-8
let topMovies = ["Avengers: Age of Ultron", "Spectre", "Jurrasic World", "Inside Out"];
document.write ("<h1> Top Movies of 2024: </h1>");
document.write("1) " + topMovies[0] + "<br />");
document.write("2) " + topMovies[1] + "<br />");
document.write("3) " + topMovies[2] + "<br />");
document.write("4) " + topMovies[3] + "<br />" + "<br />");
document.write("Length of the array: " + topMovies.length + "<br />" + "<br />");



// Question-9
let stdScr = [320, 230 , 480 , 120];
document.write ("Scores of Students: " + stdScr + "<br />");
stdScr.sort(function(a, b) {
    return a - b;
});
document.write ("Ordered Scores of Students: " + stdScr);




// Question-10
let sudiPKR = 78;
let pkr = 279;

let exDollor = confirm("Do you want you exchange USD?");
if (exDollor) {
    let pkrDlr = +prompt("How much dollar exchange?");
    if (pkrDlr) {
        console.log("your USD amount in pakistani rupees = " + pkrDlr * pkr);
    }
    
    else {
        console.log("Please inter your number.");
    }
}

let exSudiRiyal = confirm("Do you want you exchange SUDIRIYYAL?");
if (exSudiRiyal){
    let sudiRiyal = +prompt("How much SUDIRIYAL exchange?");
    if (sudiRiyal) {
        console.log("Your SAUDI RIYYAL amount in pakistani rupees = " + sudiRiyal * sudiPKR);
    }

    else{
        console.log("Please inter your SUDI RIYYAL number.");
}
}




// Question-11
let cars = ["Audi", "Volvo", "Ford", "Lamborghini"];
document.write("<h1>Favourite Cars </h1>");
document.write(cars + "<br />" + "<br />");
document.write("First index of the array: " + cars.indexOf("Audi") + "<br />");
document.write("Car at the first index of the array: " + cars[0] + "<br />");
document.write("Last index of the array: " + cars.lastIndexOf("Lamborghini") + "<br />");
document.write("Car at the last index of the array: " + cars[3] + "<br />" + "<br />" + "<br />");




// Question-12
// let fruList = ["strawberry", "apple", "orange", "banana"];
// document.write ("Fruits List: "  + "<br />" + fruList + "<br />"  + "<br />");
// let fLength = fruList.length(fruList);
// document.write ("Ordered Fruits List: " + fLength);
/// not done yet




// Question-13
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta","Peshawar"];
document.write ("Cities List: "  + "<br />" + cities + "<br />"  + "<br />");
let citiSlice = cities.slice(2,4);
document.write ("Selected Cities List: "  + "<br />" + citiSlice + "<br />"  + "<br />");




// Question-15
let arr = ["This","is","my","cat"];
let arrArr = arr.join(",");
document.write ("Array: "  + "<br />" + arrArr + "<br />"  + "<br />");
let arrStr = arr.join(" ");
document.write ("String: "  + "<br />" + arrStr + "<br />"  + "<br />");



// Question-16
let colors = ["red","blue","green"];
document.write(colors  + "<br />");

colors.unshift(prompt("Add color on begining"));
document.write(colors  + "<br />");

colors.push(prompt("Add color on last"));
document.write(colors  + "<br />");

colors.unshift(prompt("Add one more color on begining"));
document.write(colors  + "<br />");

colors.shift();
colors.pop();
document.write(colors  + "<br />");

colors.splice(2,2,"purple");
document.write(colors);