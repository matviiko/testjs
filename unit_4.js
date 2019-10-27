document.querySelector("#but1").onclick =  function ()  {
   var div = document.querySelector("#div1");
   div.innerHTML = "<input type='text'>" + "<button>Click</button>";
    var buttonTwo = document.querySelector("button");
    buttonTwo.onclick = function () {
        var input = document.querySelector("input");
        alert(input.value);
    }
};

