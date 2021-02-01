
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById('red').onclick = colorRed;

    function colorRed() {
        document.body.style.background ='red';
    }

    document.getElementById('green').onclick = colorGreen;

    function colorGreen() {
        document.body.style.background ='green';
    }

    document.getElementById('yellow').onclick = colorYellow;

    function colorYellow() {
        document.body.style.background ='yellow';
    }

    document.getElementById('blue').onclick = colorBlue;

    function colorBlue() {
        document.body.style.background ='blue';
    }

})();