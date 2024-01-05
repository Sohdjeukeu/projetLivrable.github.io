function readCSV() {
    fetch('/data/fontaines.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.trim().split('\n').slice(1);
            const tableBody = document.getElementById('donnees');
            
            rows.forEach(row => {
                const cols = row.split(',');
                const tableRow = document.createElement('tr');

                const columnsToDisplay = [cols[0], cols[1], "none", cols[2], cols[4]];

                columnsToDisplay.forEach(col => {
                    const tableCell = document.createElement('td');
                    tableCell.textContent = col;
                    tableRow.appendChild(tableCell);
                });

                tableBody.appendChild(tableRow);
            });
        })
        .catch(error => console.error('Une erreur s\'est produite :', error));
}
window.onload = readCSV;
//FIXME - fix les trucs du genre "7775, ave Des Ormeaux"