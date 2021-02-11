// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

// Create a table in the element 'target'

let table = document.createElement('table');
document.getElementById('target').appendChild(table);

// Function to generate  x rows
function generateRow(x) {
    for (let i = 0; i< x; i++) {
        //multiplicator
        let multi = i + 1;
        // Put in the addRow function
        addRow("table", x, multi);
    }
}

// Function addRow
function addRow(tableId, x, multi) {
    // Get reference of the table
    let tableRef = document.querySelector(tableId);
    // Insert row at the end of the table
    let newRow = tableRef.insertRow(-1);
    // Insert celles trought the generateCells function
    generateCells(x, newRow, multi);
}
function generateCells(x, newRow, m) {
    for(let i = 0; i < x; i++) {
        //and generate there content
        let n = newRow.insertCell(i);
        n.innerHTML = m * (i + 1);
    }
}

generateRow(10);
})();