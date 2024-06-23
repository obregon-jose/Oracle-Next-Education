function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function convertirDolaresAReales(dolares) {
    return dolares * 4.8;
}

function calcularAreaYPerimetroRectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    return `El área es ${area} y el perímetro es ${perimetro}`;
}

function calcularAreaYPerimetroCircular(radio) {    
    let area = 3.14 * radio ** 2;
    let perimetro = 2 * 3.14 * radio;
    return `El área es ${area} y el perímetro es ${perimetro}`;
}

function mostrarTablaMultiplicar(numero) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return tabla;
}

console.log(calcularIMC(1.75, 70));
console.log(calcularFactorial(5));
console.log(convertirDolaresAReales(10));
console.log(calcularAreaYPerimetroRectangular(5, 10));
console.log(calcularAreaYPerimetroCircular(5));
console.log(mostrarTablaMultiplicar(5));
