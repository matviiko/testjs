var button = document.querySelector("button");
button.onclick = function () {
    var p = document.querySelector("p");
    var input = document.querySelector("input");
    var i = input.value;

    for (; i >= 0 ; i --) {
        p.innerHTML += i + "<br>"
    }
};



// Lessons 7
