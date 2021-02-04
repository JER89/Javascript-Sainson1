// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    // Afficher dans la console les clés et les valeurs d'un objet créé
    //à l'aide d'un tableau.

    document.getElementById("run").addEventListener("click", () => {
    // Créer un tableau
    let arr = [];
    keys.forEach((newKey,newValue) => {
        arr.push([newKey,values[newValue]]);
    });
    // forEach() = exécuter une fonction donnée sur chaq élément du tableau.
    // push() = ajoute un ou plusieurs éléments à la fin d'un tableau
    //et retourne un nouveau.
    const object = Object.fromEntries(arr);
    // La méthode Object.fromEntries() permet de transformer une liste de paires
    //de clés/valeurs en un objet.
    console.log(object);

    })
})();