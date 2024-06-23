function holaMundo(){
    console.log('¡Hola, mundo!');
}

function holaNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

function dobleNumero(numero){
    return numero * 2;
}

function promedioTresNumeros(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

function mayorDeDosNumeros(num1, num2){
    return num1 > num2 ? num1 : num2;
}

function multiplicarNumeroPorSiMismo(numero){
    return numero * numero;
}

holaMundo();
holaNombre('JOSÉ');
console.log(dobleNumero(5));
console.log(promedioTresNumeros(5, 10, 15));
console.log(mayorDeDosNumeros(5, 10));
console.log(multiplicarNumeroPorSiMismo(5));
