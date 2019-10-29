var out = document.querySelector('.out');

for (var k=0; k < 3; k++) {
out.innerHTML += k+1  + "<br>";
    for (var i = 0; i < 3; i++) {
        out.innerHTML += "*_";
    }
    out.innerHTML += "<br>";
}

// Lessons 2