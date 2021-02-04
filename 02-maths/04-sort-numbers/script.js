// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let numbers = document.getElementById("numbers").value;
        let array = numbers.split(", ");

            // A function that defines an alternative sort order. 
            // The function should return a negative, zero, or positive value, depending on the arguments, like:
            // function(a, b){return a-b}
            // When the sort() method compares two values, it sends the values to the compare function, 
            // and sorts the values according to the returned (negative, zero, positive) value.

        function sortNumbers() {
            array.sort(function(a, b){return a - b});
            alert(array);
        }
        sortNumbers();
    });

})();