// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", (event) => {
        const year = document.getElementById("year").value;
    
        const months = [];
        for (let month=0; month<12; month++) {
            let d = new Date(year,month,13);
            if(d.getDay() == 5){
                months.push(d.toLocaleString('default', { month: 'long' }));
            }
        }
    
        alert(months.join(", "));
    
        })    
    
})();