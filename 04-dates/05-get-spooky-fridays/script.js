// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const year = document.getElementById("year").value;
    
        const months = [];
        for (let month=0; month<12; month++) {
            // Vérifier si le 13eme jour est un vendredi
            // si oui, incrémenter de 1
            // si non, nothing
            let d = new Date(year,month,13);
            // Dans la fonction getDay, on commence par le dimanche = 0 => Vendredi = 5
            if(d.getDay() == 5){
            // On introduit les données obtenues dans le tableau months   
                months.push(d.toLocaleString('default', { month: 'long' }));
            }
        }
    
        alert(months);
    
        })    
    
})();