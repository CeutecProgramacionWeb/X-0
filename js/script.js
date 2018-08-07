var figuraActual = 'x';

var dibujarFigura = function(elementId){
    let element = document.getElementById(elementId);
    if(element.innerHTML !== 'x' && element.innerHTML !== '0'){
        element.innerHTML = figuraActual;
        if(figuraActual === 'x'){
            figuraActual = '0';
        }else if(figuraActual === '0'){
            figuraActual = 'x';
        }
    }
}

function limpiarTablero(){
    let tablero = document.getElementById('tablero');
    for(let i =0; i<tablero.rows.length; i++){
        for(let j = 0; j< tablero.rows[i].cells.length; j++){
            tablero.rows[i].cells[j].innerHTML = "&nbsp;"
        }
    }
}