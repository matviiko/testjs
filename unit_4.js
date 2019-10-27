document.querySelector("button").onclick = () => {
   var input = document.querySelector("input");
   alert(input.value);
   if (input.value.length < 6 )
       console.log("Please write more 6")
};