// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {
    document.getElementById("run").addEventListener("click", () => {

   let pwOne = document.getElementById("pass-one");
   let pwTwo = document.getElementById("pass-two");
    //pwOne.value == pwTwo.value;

   if(pwOne.value !== pwTwo.value) {
       pwOne.style.borderColor = "green";
       pwTwo.style.borderColor = "red";
   } else {
       pwOne.style.borderColor = "green";
       pwTwo.style.borderColor = "green";
   }

   
       
   });

})();