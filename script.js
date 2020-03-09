document.querySelector("h1").innerHTML = document.title;
document.querySelector("h1").classList.add("test");
var p = document.querySelectorAll("p");
for(var i = 0;i<p.length;i++){
    p[i].classList.add("test");
}