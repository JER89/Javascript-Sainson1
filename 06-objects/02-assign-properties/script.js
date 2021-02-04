//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        // Pour chaque PC, afficher dans la console toutes les propriétés
        computers.forEach((elem) => {
            // Objet.hasOwnProperty(P) : utilisée pour vérifier si l'objet(Objet) a la propriété(P) spécifiée
            //comme sa propre propriété(P). Utile pour vérifier si l'objet a hérité de la propriété plutôt que de lui appartenir.
            if(elem.hasOwnProperty("available") == false) {
                elem.available = defaultProps.available;
            }
            if(elem.hasOwnProperty("os") == false) {
                elem.os = defaultProps.os;
            }
            if(elem.hasOwnProperty("user") == false) {
                elem.user = defaultProps.user;
            }
            // false = pour ne pas écraser la valeur par défaut.

            console.log(elem);
        })
    })
})();