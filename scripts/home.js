window.addEventListener("DOMContentLoaded", init);
var body = document.querySelector("body");
var button = body.getElementsByTagName("button").item(0);
var button2 = body.getElementsByTagName("button").item(1);

function init() {
    console.log("hi");
}

button.addEventListener("click", (e) => {
    localStorage.setItem("a", "b");
})

button2.addEventListener("click", (e) => {
    console.log(localStorage.length);
    localStorage.clear();
});