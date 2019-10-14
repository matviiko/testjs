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

var num1 = document.querySelector("#input-in1");
var num2 = document.querySelector("#input-in2");
var button = document.querySelector("button");

button.onclick = function () {
    var p = document.querySelector("p");
    if (num1.value > num2.value) {
        p.innerHTML = "<p>Number first more than second</p>"
    }
    else if (num1.value < num2.value) {
        p.innerHTML = "<p>Number second more than first</p>"
    }
    else {
        p.innerHTML = "<p>More less</p>"
    }
};
//Lessons 4