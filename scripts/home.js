window.addEventListener("DOMContentLoaded", init);
var body = document.querySelector("body");
var button = body.getElementsByTagName("button").item(0);
var button2 = body.getElementsByTagName("button").item(1);

function init() {
    console.log("hi");
}

button.addEventListener("click", (e) => {
    localStorage.setItem("a", "b");
    let tmp = document.getElementById("wassup");
    if (tmp.textContent == "waassup") {
        tmp.textContent = "I need sleep";
    } else {
        tmp.textContent = "waassup";
    }
})

button2.addEventListener("click", (e) => {
    console.log(localStorage.length);
    localStorage.clear();
});

function add(a, b) {
    return a + b;
}
