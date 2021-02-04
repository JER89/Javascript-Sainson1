// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
           // random(= aléatoire) de birds
           let i = Math.floor(Math.random() * birds.length);
           // le Set n'est pas un Array, je dois donc transformer en Array
           // array.from() permet de créer une copie superficielle à partir d'un objet itérable.
           
           let tab = Array.from(adjectives);
           // du coup tab[j] renvoie le tableau des adjectifs en random
           // random(=aléatoire) de adjectives
           let j = Math.floor(Math.random() * tab.length);
   
           // si fem == true dans birds, mettre un 'la' au début du groupe sujet et un 'e' à la fin de adjectives
           if (birds[i].fem == true) {
               document.getElementById("target").innerHTML = ("La " + birds[i].name + " " + tab[j] + "e");
               // sinon mettre un 'le' au début du groupe sujet
           } else {
               document.getElementById("target").innerHTML = ("Le " + birds[i].name + " " + tab[j]);
           }
    });
})();