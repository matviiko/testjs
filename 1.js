var a = 4;
if ((a == 4))
    console.log('Working!!!');
//Lessons 1

var b = 8;
var c = 10;
if ( b > c ) {
    console.log("B > C");
}
else {
    console.log("C > B");
}
//Lessons 2

// var num1 = document.querySelector("#input-in1");
// var num2 = document.querySelector("#input-in2");
// var button = document.querySelector("button");
//
// button.onclick = function () {
//     var p = document.querySelector("p");
//     if (num1.value > num2.value) {
//         p.innerHTML = "<p>Number first more than second</p>"
//     }
//     else if (num1.value < num2.value) {
//         p.innerHTML = "<p>Number second more than first</p>"
//     }
//     else {
//         p.innerHTML = "<p>More less</p>"
//     }
// };
//Lessons 4

// var bDay = document.querySelector("#input-i");
// var button = document.querySelector("button");
// var p = document.querySelector("p");
//
// button.onclick = function () {
//     if (bDay.value < 2000) {
//         var d1 = 2019 - bDay.value;
//         p.innerHTML = d1;
//     }
//     else if (bDay.value >= 2000) {
//         var d2 = 2019 - bDay.value;
//         console.log(d2);
//     }
// };
// //Lessons 5

// var nun = document.querySelector("#input-i");
// var button = document.querySelector("button");
// var p = document.querySelector("p");
//
// button.onclick = function () {
//     if (nun.value > 0) {
//         alert("The number is greater than 0");
//     }
//     else {
//        alert("The number is less than 0");
//     }
// };
// //Lessons 7

// var num1 = document.querySelector("#input-i");
// var button = document.querySelector("button");
// var p = document.querySelector("p");
//
// button.onclick = function () {
//     var n = num1.value % 2;
//     if (n == 0) {
//         p.innerText = "Even number";
//     }
//     else {
//         p.innerText = "Ood number";
//     }
// };
// Lessons 8

// var num1 = document.querySelector("#input-i");
// var button = document.querySelector("button");
//
// button.onclick =  function () {
//     var name = num1.value;
//     if (name == " ") {
//         alert("Please write your name!!");
//     }
//     else {
//         alert("Hello " + name);
//     }
// };
// Task 10

// var num1 = document.querySelector("#input-i");
// var button = document.querySelector("button");
//
// button.onclick =  function () {
//     var name = num1.value;
//     name = name.trim();
//     if (name == "") {
//         alert("Please write your name!!");
//     }
//     else {
//         alert("Hello " + name);
//     }
// };
//Task 11

// var num1 = document.querySelector("#input-i");
// var button = document.querySelector("button");
// var p = document.querySelector("p")
//
// button.onclick = function () {
//     if (num1.value <= 5 ) {
//         p.innerText = "Street 1";
//     }
//     else if (num1.value > 5 && num1.value <= 11) {
//         p.innerText = "Street 2";
//     }
//     else if (num1.value > 11 && num1.value <= 20) {
//         p.innerText = "Street 3";
//     }
// };
//Task13

var num1 = document.querySelector("#input-i");
var button = document.querySelector("button");
var p = document.querySelector("p");
var k1 = num1.value;

button.onclick = function () {
    switch (k1) {
        case 1:
            p.innerText = "2525 tenge";
            console.log("1");
            break;
        case 2:
            p.innerText = "5050 tenge";
            console.log("2");
            break;
        case 3:
            p.innerText = "8275 tenge";
            console.log("3");
            break;
    }
};


