console.log('¡Bienvenido!');
let nombre = 'José Obregón';

console.log(`¡Hola, ${nombre}!`);
alert(`¡Hola, ${nombre}!`);

let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`El lenguaje de programación que más me gusta es: ${lenguaje}`);

let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);

let edad = prompt('¿Cuál es tu edad?');
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

let numero = prompt('Indica un número por favor:');
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero < 0) {
    console.log('El número es negativo');
} else {
    console.log('El número es cero');
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = prompt('Indica tu nota por favor:');
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

let numeroAleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatorio entre 1 y 10: ${numeroAleatorio1a10}`);

let numeroAleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatorio entre 1 y 1000: ${numeroAleatorio1a1000}`);
