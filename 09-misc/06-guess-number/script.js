
// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

   const x = Math.floor(Math.random() * 100) +1;
   let y;
   let count = 0;
   do {
       count++;
       y = prompt ("Pick a number between 1 and 100");
       if(y != x) {
           y < x ? alert(x + "Too low") : alert(x + "Too High");

       } else {
           alert("GG ! You needed : " + count + "guess");
       }
   } while (y != x);

})();