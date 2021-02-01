
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let n = parseInt(document.getElementById("number").value);

        function factorial(n) {
            if (n < 0) {
                exit (EXIT_FAILURE);
            }
            else if (n <= 1) {
                return 1;
            }
            return n * factorial (n - 1);
        }
            let answer = factorial(n);
            alert(answer);

    });

})();