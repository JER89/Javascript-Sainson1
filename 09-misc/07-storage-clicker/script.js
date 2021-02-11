// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    document.getElementById("increment").addEventListener("click", () => {
        if(localStorage.clicked) {
            localStorage.clicked = Number(localStorage.clicked) + 1;
        } else {
            localStorage.clicked = 1;
        }
        display();
    });
    function display() {
        document.getElementById('target').innerHTML = 
        "You clicked " + localStorage.clicked + " time(s).";
    }

})();