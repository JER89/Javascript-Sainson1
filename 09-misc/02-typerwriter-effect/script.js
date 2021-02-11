// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    var i = 0; // Etre sur que nous commencons au début du paragraphe
    let text = document.getElementById("target").textContent; // .textcontent = contenu textuel d'un noeud
    var speed = 150; 

    function typeWritter() {
            document.getElementById("target").innerHTML += text.charAt(i); 
            // La méthode charAt () renvoie le caractère à l'index spécifié dans une chaîne.
            // L'index du premier caractère est 0, le second caractère est 1, et ainsi de suite.
            i++;
        
        setTimeout(typeWritter, speed);
    };

    typeWritter();
})();