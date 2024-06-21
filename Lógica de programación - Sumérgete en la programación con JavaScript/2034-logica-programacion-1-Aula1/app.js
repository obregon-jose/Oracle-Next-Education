let nivel = prompt("Elige un nivel de dificultad: fácil [d], medio [m], difícil [d]");

let maxNum;
switch (nivel) {
    case "f":
        maxNum = 10;
        break;
    case "m":
        maxNum = 25;
        break;
    case "d":
        maxNum = 50;
        break;
    default:
        alert("No seleccionaste un nivel válido. Se establecerá el nivel medio por defecto.");
        maxNum = 25;
}
// let maxNum = 10;
let numeroSecreto = Math.floor(Math.random() * maxNum) + 1;
let numeroUsuario = 0;
let intentos = 1;
let MaxIntentos = 5;

console.log(numeroSecreto);
while(numeroSecreto != numeroUsuario && intentos <= MaxIntentos){
    numeroUsuario = prompt(`Me indicas un número entre 1 y ${maxNum} por favor: `);
    console.log(typeof(numeroUsuario));
    if (numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario} \nLo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    }
    else {
        if (intentos >= MaxIntentos){
            alert('Lo siento, has superado el número de intentos permitidos');
            break;
        } else {
            misIntentos = MaxIntentos - intentos;

            if (numeroUsuario > numeroSecreto) {
                alert(`El número es menor, puedes intentarlo ${misIntentos} ${intentos == 1 ? 'vez' : 'veces'} más`);
            } else {
                alert(`El número es mayor, puedes intentarlo ${misIntentos} ${intentos == 1 ? 'vez' : 'veces'} más`);
            }
        }
        intentos++;
    }
}