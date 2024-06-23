let numeroSecreto = 0;
let intentos = 0;
let numMaximo = 10;
let listaNumerosSorteados = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function condicionesIniciales(){
    buttonVisibility('reiniciar');
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingrese un número entre 1 y ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 0;
    document.getElementById("numUser").max = `${numMaximo}`;
}

function jugar(){
    let numeroUsuario = parseInt(document.getElementById('numUser').value);
    // console.log(numeroUsuario);
    // console.log(typeof(numeroUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    //console.log(numeroUsuario === numeroSecreto);
    
    if (numeroUsuario > 0) { //mejorar esta validación
        intentos++;
        // alert(numeroUsuario);
        console.log(intentos);
        if (numeroUsuario === numeroSecreto) {
            asignarTextoElemento('p', `¡Ganaste! <br> En ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
            buttonVisibility('reiniciar');
            buttonVisibility('jugar');
        } 
        else {
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor');
            } 
            else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            limpiarCaja();         
        }
    } 
    else {
        alert('Ingrese un número');
    }
}

function reiniciarJuego(){
    buttonVisibility('jugar');
    condicionesIniciales();
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#numUser').value = '';
    // document.getElementById('numUser').value = '';
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random() * numMaximo) + 1;

    let numeroGenerado =  Math.floor(Math.random()*numMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function buttonVisibility(buttonId) {
    let button = document.getElementById(buttonId);
    if (button.style.display === "none") {
        button.style.display = "block"; // Muestra el botón si está oculto
    } else {
        button.style.display = "none"; // Oculta el botón si está visible
    }
}

condicionesIniciales();