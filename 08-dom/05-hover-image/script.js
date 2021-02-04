// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {
// La méthode getElementsByTagName () retourne une collection de tous les éléments 
//du document avec le nom de balise spécifié, sous la forme d'un objet HTMLCollection .
//L' objet HTMLCollection représente une collection de nœuds. Les nœuds sont 
//accessibles par numéros d'index. L'index commence à 0.
// Syntaxe:  document.getElementsByTagName(tagname)  

let img = document.getElementsByTagName("img") [0];
let value = img.getAttribute('data-hover');
img.addEventListener('mouseover', () => {
    img.src = value;
});

})();