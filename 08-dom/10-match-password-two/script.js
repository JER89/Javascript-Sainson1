// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let pwOne = document.getElementById("pass-one");
        let pwTwo = document.getElementById("pass-two");
         
     
        if(pwOne.value !== pwTwo.value) {
           pwOne.classList.add('error');
           pwTwo.classList.add('error');
        }  
            else {
            pwOne.classList.remove("error");
            pwTwo.classList.remove("error");

        }
     
        
            
    });

})();