document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("tbody");

    function sortTable() {
        let rows = Array.from(table.rows);

        rows.sort((rowA, rowB) => {
            let pointsA = parseInt(rowA.cells[5].textContent);
            let pointsB = parseInt(rowB.cells[5].textContent);

            if (pointsA !== pointsB) {
                return pointsB - pointsA; 
            } else {
                let nrrA = parseFloat(rowA.cells[6].textContent);
                let nrrB = parseFloat(rowB.cells[6].textContent);
                return nrrB - nrrA; 
                // If points are equal, sort by NRR
            }
        });

        table.innerHTML = "";
        rows.forEach(row => table.appendChild(row));
    }

    sortTable(); // Sort table on page load
});
