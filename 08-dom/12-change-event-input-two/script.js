// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {
let numbers = /[0-9]/g;
let passOne = document.getElementById('pass-one');
passOne.addEventListener('input', () => {
    let count = passOne.value.length;
    if((count>=8)&&(passOne.value.match(numbers))) {
        document.getElementById("validity").innerHTML = "OK";
    }
})
    

})();