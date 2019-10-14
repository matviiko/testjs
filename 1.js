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

var nun = document.querySelector("#input-i");
var button = document.querySelector("button");
var p = document.querySelector("p");

button.onclick = function () {
    if (nun.value > 0) {
        alert("The number is greater than 0");
    }
    else {
       alert("The number is less than 0");
    }
};
//Lessons 7