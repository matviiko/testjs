document.querySelector("button").onclick = () => {
    var p = document.querySelector("p");
    var checkbox = document.querySelector("input");
    console.log(checkbox.value);
    if (checkbox.checked == true)
        p.innerText = checkbox.value;
    else
        p.innerText = "FALSE";
};