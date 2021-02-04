// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const date = new Date;
    // weekday, month 'long' = afficher le nom du jour en tte lettres    
    // day, year 'numeric' = afficher le jour et l'année en tt chiffres.
    // hour, minute '2-digit' = afficher l'heure et les minutes en deux chiffres
    const options = { weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric' , hour: '2-digit' , minute: '2-digit'};
    // affiche la date au format demandé, en Anglais('en-GB')
    document.getElementById("target").innerHTML = date.toLocaleDateString('en-GB', options); 
    



})();