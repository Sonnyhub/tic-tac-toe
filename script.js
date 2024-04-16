let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontale Reihen
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertikale Reihen
    [0, 4, 8], [2, 4, 6] // diagonale Reihen
];

function init(){
    render();
}

function render() {
    let tableHtml = '<table class="tic-tac-toe">'; // der Varibale tableHTML wird das öffnende table tag zugewiesen
    for (let i = 0; i < 3; i++) {   // mit der for schleife werden 3 Zeilen generiert
        tableHtml += '<tr>';        // die Variable tabelHTML erhält als zusatz ein <tr> element 

        for (let j = 0; j < 3; j++) {   // in jede Zeile werden jeweils 3 cellen generiert
            let index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle'){
                symbol = generateAnimatedCircleSVG();
            } else if (fields[index] === 'cross'){
                symbol = generateAnimatedCrossSVG();
            }
            tableHtml += `<td class="cell" id="cell${index}" onclick="setObject(${index})" >${symbol}</td>`;
            
        }
        tableHtml += '</tr>';      // jeder Zeile wird ein schliesendes <tr> tag hinzugefügt
    }
    tableHtml += '</table>';    // die Tabelle wird geschlossen
    // die Variable tableHTML hat nun alle elemente hinzugefügt bekommen und somit den wert des gesamten Raster

    document.getElementById('mainContainer').innerHTML = tableHtml;
}

function setObject(index) {
    // Überprüfen, ob das Feld bereits belegt ist
    if (fields[index] === null) {
        // Festlegen, ob es sich um ein Kreuz oder einen Kreis handelt
        fields[index] = (fields.filter(field => field !== null).length % 2 === 0) ? 'cross' : 'circle';
        

        // HTML-Code für das Symbol generieren
        let symbol = (fields[index] === 'circle') ? generateAnimatedCircleSVG("#ff9500") : generateAnimatedCrossSVG("#ff9500");
        
        // HTML-Code in das angeklickte <td> Element einfügen
        document.getElementById(`cell${index}`).innerHTML = symbol;
        
        // onclick-Funktion vom jeweiligen <td> Element entfernen
        document.getElementById(`cell${index}`).removeAttribute("onclick");
        setCurrentPlayer(fields[index]);
        checkWinner();

    }
}

function checkWinner() {
    // Schleife durch alle Gewinnkombinationen
    for (let i = 0; i < winningCombinations.length; i++) {
        // Die Indizes der aktuellen Gewinnkombination extrahieren
        const [a, b, c] = winningCombinations[i];

        // Überprüfen, ob alle Felder in der aktuellen Kombination den gleichen Wert haben
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            // Wenn ja, bedeutet dies, dass ein Spieler gewonnen hat

            // Überprüfen, welcher Spieler die Gewinnkombination erreicht hat
            if (fields[a] === 'circle') {
                // Wenn 'circle' gewonnen hat, eine Nachricht ausgeben
                console.log('Kreis hat gewonnen');
            } else if (fields[a] === 'cross') {

                // Wenn 'cross' gewonnen hat, eine Nachricht ausgeben
                console.log('X hat gewonnen');
            }

            // Die Funktion beenden, da ein Gewinner gefunden wurde

            let winningIndexes = winningCombinations[i];
            drawWinningLine(winningIndexes);
        }
    }

    // Wenn keine Gewinnkombination gefunden wurde, eine Nachricht ausgeben
    console.log('noch kein Gewinner');
}

function drawWinningLine(winningIndexes) {
    // Gewinnende Indizes extrahieren
    const [a, b, c] = winningIndexes;
    // Positionen der gewinnenden Zellen bestimmen
    const cellA = document.getElementById(`cell${a}`);
    const cellB = document.getElementById(`cell${b}`);
    const cellC = document.getElementById(`cell${c}`);

    // Positionen der Zellen relativ zum Dokument berechnen
    const rectA = cellA.getBoundingClientRect();
    const rectB = cellB.getBoundingClientRect();
    const rectC = cellC.getBoundingClientRect();

    // SVG-Element für die Linie erstellen
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("style", "position: absolute; top: 0; left: 0; z-index: 300");

    // Linie erstellen und Attribute festlegen
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", rectA.left + rectA.width / 2);
    line.setAttribute("y1", rectA.top + rectA.height / 2 - 7); // Anpassung um 5px nach oben
    line.setAttribute("x2", rectC.left + rectC.width / 2);
    line.setAttribute("y2", rectC.top + rectC.height / 2 - 8); // Anpassung um 5px nach oben
    line.setAttribute("stroke", "white"); // Farbe auf Weiß geändert
    line.setAttribute("stroke-width", "12"); // Dicke auf 8px geändert
    line.setAttribute("stroke-linecap", "round");

    // Linie zum SVG hinzufügen
    svg.appendChild(line);
    document.body.appendChild(svg);

    // Animation starten
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
    line.getBoundingClientRect();
    line.style.transition = line.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
    line.style.strokeDashoffset = '0';

}


function removeWinningLine() {
    // SVG-Element aus dem DOM entfernen, wenn es vorhanden ist
    const svg = document.querySelector("svg");
    if (svg) {
        svg.remove();
    }
}


function restardGame(){
    fields = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ];
        render();
        removeWinningLine();
        removeWinningLine();
        setCurrentPlayer('circle');
}


function setCurrentPlayer(symbol){
    let curentPlayerInfo = document.getElementById('curentPlayerInfo');
    if (symbol === 'cross' ){
        curentPlayerInfo.innerHTML= currentPlayerO();
    }
    else if (symbol === 'circle'){
        curentPlayerInfo.innerHTML= currentPlayerX();
    }
}