// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
        document.getElementById("run").addEventListener("click", () => {
            fruits.shift(); // Remove first element
            fruits.pop(); // Remove last element
            fruits.unshift("banana"); // add an element "banana" at the start
            fruits.push("kiwi"); // add an element "kiwi" at the end.
            alert(fruits);
        })
})();