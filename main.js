var color = ["blue", "red", "yellow", "green", "purple"];

var i = 0;
document.querySelector(".btn1").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})