let diaDeLaSemana = prompt("¿Qué día de la semana es hoy?");
if (diaDeLaSemana === "Sábado" || diaDeLaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

let numero = prompt("Ingresa un número:");
numero = parseInt(numero);
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

let puntuacion = prompt("Ingresa tu puntuación:");
puntuacion = parseInt(puntuacion);
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}
let saldoDisponible = 1000;
alert(`Tu saldo disponible es de $${saldoDisponible}.`);


nombre = prompt("¿Cuál es tu nombre?");
alert(`¡Bienvenido/a, ${nombre}!`);