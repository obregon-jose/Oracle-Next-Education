/*
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

function mostrarElementosInverso(lista) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i]);
    }
}

function promedioElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

function mayorMenorElementos(lista) {    
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log(`El número más grande es ${mayor} y el número más pequeño es ${menor}`);    
}

function sumaElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

function posicionElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}

function sumaListas(lista1, lista2) {
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}

function cuadradoElementos(lista) {
    let listaCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrado.push(lista[i] ** 2);
    }
    return listaCuadrado;
}

console.log(listaGenerica);
console.log(lenguagesDeProgramacion);
mostrarElementos(lenguagesDeProgramacion);
mostrarElementosInverso(lenguagesDeProgramacion);
console.log(promedioElementos([1, 2, 3, 4, 5]));
mayorMenorElementos([1, 2, 3, 4, 5]);
console.log(sumaElementos([1, 2, 3, 4, 5]));
console.log(posicionElemento([1, 2, 3, 4, 5], 3));
console.log(sumaListas([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(cuadradoElementos([1, 2, 3, 4, 5]));
