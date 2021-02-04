// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(people.size);
        // L'accesseur SIZE est une propriété renvoyant le nombre d'éléments d'un objet PEOPLE
        console.log(people.has("Alexandre"));
        // La méthode HAS renvoie un booléen permettant de déterminer si l'objet PEOPLE en question contient la clé donnée.
    });
})();