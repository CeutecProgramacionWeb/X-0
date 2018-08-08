var figuraActual = 'x';

var dibujarFigura = function(elementId){
    let element = document.getElementById(elementId);
    if(element.innerHTML !== 'x' && element.innerHTML !== '0'){
        element.innerHTML = figuraActual;
        if(validarGanador(figuraActual)){
            alert(`El jugador ${figuraActual} ha ganado`);
        }
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

function validarGanador(jugador){
    let tablero = document.getElementById('tablero');
    if(tablero.rows[0].cells[0].innerHTML === jugador){
        let primeraCombinacion = tablero.rows[0].cells[1].innerHTML === jugador && tablero.rows[0].cells[2].innerHTML === jugador;
        let segundaCombinacion = tablero.rows[1].cells[1].innerHTML === jugador && tablero.rows[2].cells[2].innerHTML === jugador;
        let terceraCombinacion = tablero.rows[1].cells[0].innerHTML === jugador && tablero.rows[2].cells[0].innerHTML === jugador;
        if(primeraCombinacion || segundaCombinacion || terceraCombinacion){
            return true;
        }
    } 
    if(tablero.rows[0].cells[2].innerHTML === jugador){
        let primeraCombinacion = tablero.rows[1].cells[2].innerHTML === jugador && tablero.rows[2].cells[2].innerHTML === jugador;
        let segundaCombinacion = tablero.rows[1].cells[1].innerHTML === jugador && tablero.rows[2].cells[0].innerHTML === jugador;
        if(primeraCombinacion || segundaCombinacion){
            return true;
        }   
    }
    if(tablero.rows[2].cells[2].innerHTML === jugador){
        let primeraCombinacion = tablero.rows[2].cells[1].innerHTML === jugador && tablero.rows[2].cells[0].innerHTML === jugador;
        let segundaCombinacion = tablero.rows[1].cells[1].innerHTML === jugador && tablero.rows[0].cells[0].innerHTML === jugador;
    
        if(primeraCombinacion || segundaCombinacion){
            return true;
        }
    }
    if(tablero.rows[1].cells[1].innerHTML === jugador){
        let primeraCombinacion = tablero.rows[0].cells[1].innerHTML === jugador && tablero.rows[2].cells[1].innerHTML === jugador;
        let segundaCombinacion = tablero.rows[1].cells[0].innerHTML === jugador && tablero.rows[1].cells[2].innerHTML === jugador;
    
        if(primeraCombinacion || segundaCombinacion){
            return true;
        }
    }
}