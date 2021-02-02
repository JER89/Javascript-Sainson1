// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let tab = new Array;
        for (i = 1;i<=21;i++) {
            
            tab.push(i * i);
        }

        alert(tab);

    });

})();
