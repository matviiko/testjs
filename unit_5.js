var button = document.querySelector("button");

button.onclick = function () {
    var p = document.querySelector("p");
    var div =  document.querySelectorAll(".one");
    var i = 0;


    for (; i < div.length ; i ++) {
        alert(div[i].innerHTML)
    }

};


// Lessons 13
