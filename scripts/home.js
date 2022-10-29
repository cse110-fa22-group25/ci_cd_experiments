window.addEventListener("DOMContentLoaded", init);
export var body = document.querySelector("body");
export var button = body.getElementsByTagName("button").item(0);
export var button2 = body.getElementsByTagName("button").item(1);

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

export function add(a, b) {
    return a + b;
}
