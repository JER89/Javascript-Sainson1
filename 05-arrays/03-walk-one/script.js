// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        for(let fruitCount = 0; fruitCount < fruits.length; fruitCount++){
          console.log(fruits[fruitCount]);
        }
        // Pour chaque élément du tableau, l'afficher dans la console
    
      });
    

})();