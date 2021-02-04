// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //Object.keys() renvoie un tableau contenant les noms des propriétés propres à un objet.
        console.log(Object.keys(person));
        //Object.values() renvoie un tableau contenant les valeurs des propriétés propres d'un objet.
        console.log(Object.values(person));
    });

})();