function readCSV() {
    fetch('/data/compteurs.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.trim().split('\n').slice(1); // Ignorer la première ligne (header)
            const tableBody = document.getElementById('donnees');

            rows.forEach(row => {
                const columns = row.split(',');
                const tableRow = document.createElement('tr');

                // Sélectionner les colonnes qu'on veut afficher
                const columnsToDisplay = [columns[0], columns[2], columns[3], columns[6]];

                columnsToDisplay.forEach(column => {
                    const tableCell = document.createElement('td');
                    tableCell.textContent = column;
                    tableRow.appendChild(tableCell);
                });

                tableBody.appendChild(tableRow);
            });
        })
        .catch(error => console.error('Une erreur s\'est produite :', error));
}
window.onload = function() {readCSV();}


// window.onload = () => {
//     table = document.getElementById('table');
//     fetch ("/data/compteurs.csv").then(res => res.text()).then(csv => {
//         let csv = reader.result;
//         table.innerHTML = "";
//         let rows = csv.split("\r\n")
//         for (let row of rows) {
//             let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
//             for (let row of rows) {
//                 if (cols != null) {
//                     let tr = table.insertRow();
//                     for (let col of cols) {
//                         let td = tr.insertCell();
//                         td.innerHTML = col.replace(/(*"|"$)/g, "");
//                     }
//                 }
//             }
//         }
//     });
// }
        // const fs = require("fs");
        // const csv = require("csv-parser");
        // const html = require("html-escaper");

        // const csvFilePath = "compteurs.csv";
        // const htmlFilePath = "compteurs.html";

        // const csvParser = csv();
        // const htmlFile = fs.createWriteStream(htmlFilePath);

        // csvParser.on("data", (data) => {
        // htmlFile.write("<tr>\n");
        // for (const column of data) {
        //     htmlFile.write(`<td>${html.escape(column)}</td>\n`);
        // }
        // htmlFile.write("</tr>\n");
        // });

        // csvParser.on("end", () => {
        // htmlFile.end("</table>\n");
        // });

        // fs.createReadStream(csvFilePath).pipe(csvParser);


    // Lecteur de fichier + éléments html
    // window.onload = () => {
    //     var reader = new FileReader(),
    //         picker = document.getElementById('picker'),
    //         table = document.getElementById('table');

    //     // Lis le fichier csv dans le selectionneur de fichier
    //     picker.onchange = () => reader.readAsText(picker.files[0]);

    //     let valuesRegExp = /(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g;
    //     // Lis le fichier csv et génére le html
    //     reader.onloadend = () => {
    //         // Lis le fichier entier
    //         let csv = reader.result;

    //         // Vide la table html
    //         table.innerHTML="";

    //         // Diviser en lignes
    //         let rows = csv.split("\r\n")

    //         // Ça coupe les titres de chaque colonne
    //         // let headers = rows.splice(0, 1)[0].split(",");

    //         // Boucler à travers les lignes + couper les colonnes
    //         for (let row of rows) {
    //             let cols = row.match(valuesRegExp);

    //             if (cols != null) {
    //                 let tr = table.insertRow();

    //                 for (let col of cols) {
    //                     let td = tr.insertCell();
    //                     td.innerHTML = col;
    //                 }
    //             }
    //         }
    //     }
    // }

    

    // class TableCsv {
    //     /**
    //      * @param {HTMLTableElement} root The table element which will display the CSV data.
    //      */
    //     constructor(root) {
    //       this.root = root;
    //     }
      
    //     /**
    //      * Clears existing data in the table and replaces it with new data.
    //      *
    //      * @param {string[][]} data A 2D array of data to be used as the table body
    //      * @param {string[]} headerColumns List of headings to be used
    //      */
    //     update(data, headerColumns = []) {
    //       this.clear();
    //       this.setHeader(headerColumns);
    //       this.setBody(data);
    //     }
      
    //     /**
    //      * Clears all contents of the table (incl. the header).
    //      */
    //     clear() {
    //       this.root.innerHTML = "";
    //     }
      
    //     /**
    //      * Sets the table header.
    //      *
    //      * @param {string[]} headerColumns List of headings to be used
    //      */
    //     setHeader(headerColumns) {
    //       this.root.insertAdjacentHTML(
    //         "afterbegin",
    //         `
    //               <thead>
    //                   <tr>
    //                       ${headerColumns.map((text) => `<th>${text}</th>`).join("")}
    //                   </tr>
    //               </thead>
    //           `
    //       );
    //     }
      
    //     /**
    //      * Sets the table body.
    //      *
    //      * @param {string[][]} data A 2D array of data to be used as the table body
    //      */
    //     setBody(data) {
    //       const rowsHtml = data.map((row) => {
    //         return `
    //                   <tr>
    //                       ${row.map((text) => `<td>${text}</td>`).join("")}
    //                   </tr>
    //               `;
    //       });
      
    //       this.root.insertAdjacentHTML(
    //         "beforeend",
    //         `
    //               <tbody>
    //                   ${rowsHtml.join("")}
    //               </tbody>
    //           `
    //       );
    //     }
    //   }
      
    //   const tableRoot = document.querySelector("#table");
    //   const csvFileInput = document.querySelector("#picker");
    //   const tableCsv = new TableCsv(tableRoot);
      
    // //   tableCsv.setHeader(["Identifiant","Nom","Statut","Année d'implantation"]);

    // csvFileInput.addEventListener("change", (e) => {
    //     console.log(csvFileInput.files[0]);
    //     Papa.parse(csvFileInput.files[0], {
    //     download:false,
    //       delimiter: ",",
    //       skipEmptyLines: true,
    //       complete: (results) => {
    //         tableCsv.update(results.data.slice(1), results.data[0]);
    //       }
    //     });
    //   });