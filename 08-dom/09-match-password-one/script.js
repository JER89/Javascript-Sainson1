// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

   let pwOne = String(document.getElementById("pass-one").value);
   let pwTwo = String(document.getElementById("pass-two").value);

   if(pwOne !== pwTwo) {
       console.log("nope");
       document.getElementById("pass-one").style.borderColor = "green";
       document.getElementById("pass-two").style.borderColor = "red";
   } else {
       console.log("well done");
       document.getElementById("pass-one").style.borderColor = "green";
       document.getElementById("pass-two").style.borderColor = "green";
   }

   document.getElementById("run").addEventListener("click", () => {
       compare();
   });

})();