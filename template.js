function generateAnimatedCircleSVG() {
    let color = '#ff9500';
    const svgCode = /* html */`
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="75" r="70" fill="none" stroke="${color}" stroke-width="10">
                <animate attributeName="r" from="0" to="70" dur="0.3s" fill="freeze" />
            </circle>
        </svg>
    `;
    return svgCode;
}

function generateAnimatedCrossSVG() {
    let color = '#ff9500';
    const svgCode = /* html */`
  <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="20" x2="130" y2="130" stroke="${color}" stroke-width="10">
                <animate attributeName="x2" from="20" to="130" dur="0.3s" fill="freeze" />
                <animate attributeName="y2" from="20" to="130" dur="0.3s" fill="freeze" />
            </line>
            <line x1="130" y1="20" x2="20" y2="130" stroke="${color}" stroke-width="10">
                <animate attributeName="x2" from="130" to="20" dur="0.3s" fill="freeze" />
                <animate attributeName="y2" from="20" to="130" dur="0.3s" fill="freeze" />
            </line>
        </svg>
    `;
    return svgCode;
}

function currentPlayerO(){
    const svgCode = /* html */`

    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" style="stroke:#ff9500; stroke-width:10; fill:none;" />
    </svg>`;
    return svgCode;
} 

function currentPlayerX(){
    const svgCode = /* html */`

    <svg width="30" height="30" viewBox="-20 -20 140 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="-20" y1="-20" x2="120" y2="120" style="stroke:#ff9500;stroke-width:18" />
        <line x1="-20" y1="120" x2="120" y2="-20" style="stroke:#ff9500;stroke-width:18" />
    </svg>`;
    return svgCode;
} 