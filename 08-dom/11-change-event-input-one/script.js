// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {
    
    let passOne = document.getElementById('pass-one');
    
    passOne.setAttribute("maxlength", "10");

    passOne.addEventListener("input", () => {
       let count = passOne.value.length;
       document.getElementById("counter").innerHTML = count + "/10";
    });

    

})();