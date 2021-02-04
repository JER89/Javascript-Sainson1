// 05-arrays/05-walk-three/script.js - 5.5: walk through the list (3)


(() => {

    let people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        people.forEach((person) => console.log(person.firstname + " " +person.lastname));
    });
        // POur chaque élément nom et prénom du tableau, l'afficher dans la console
})()