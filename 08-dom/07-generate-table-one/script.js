// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

// Create a table
let table = document.createElement("table");
// Create Structure Array
for (let i = 0; i <= 10; i++) {
// Create Row
let tr = document.createElement('tr');
// Create cell
let td = document.createElement('td');
// The appendChild() method appends a node as the last child of a node.
// td added to tr
tr.appendChild(td);
//tr added to table
table.appendChild(tr);
}
document.getElementById('target').appendChild(table);
})();