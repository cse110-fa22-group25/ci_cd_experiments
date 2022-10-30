window.addEventListener("DOMContentLoaded", init);

if (window.localStorage.getItem("cnt") === null) {
    window.localStorage.setItem("cnt", 0);
}

var cnt = Number(window.localStorage.getItem("cnt"));

/**
 * Initialize page after load
 */
function init() {

    var inc_btn = document.getElementById("inc-btn");

    var inc_dis = document.getElementById("inc-dis");

    inc_dis.textContent = cnt;

    inc_btn.addEventListener("click", (event) => {
        cnt++;
        window.localStorage.setItem("cnt", cnt);
        inc_dis.textContent = cnt;
    });
}
