let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora del Desafío.'

function logMessage(){
    console.log('El botón fue clicado.')
}

function message(){
    alert('Yo amo JS.')
}

function ciudad(){
    let ciudad = prompt('Ingrese el nombre de una ciudad de Brasil: ')
    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

function suma(){
    let num1 = parseInt(prompt('Ingrese un número: '))
    let num2 = parseInt(prompt('Ingrese otro número: '))
    let resultado = num1 + num2
    alert(`El resultado de la suma es: ${resultado}`)
}