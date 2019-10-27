document.querySelector("button").onclick = () => {
    var p = document.querySelector("p");
    var checkbox = document.querySelector("input");
    console.log(checkbox.checked);
    if (checkbox.checked == true)
        p.innerText = "TRUE";
    else
        p.innerText = "FALSE";
};