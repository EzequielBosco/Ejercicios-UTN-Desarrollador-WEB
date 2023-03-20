/* 1. Crea un array que contenga el nombre de cinco colores escritos como strings. */

let colores = ["negro", "blanco", "azul", "rojo", "amarillo"]

/* 2. Guarda en una variable el tercer elemento del array del ejercicio anterior */

let color3 = colores[2]
console.log(color3)

/* 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1. */

console.log(colores[0].charAt(0))

/* 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random(). */

function numeroRandom (min, max) {
    const numero = Math.floor(Math.random() * max) + min;
    console.log(numero)
}

numeroRandom(1, 99)

/* 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola. */

const numero1Al0 = [];

for (let i = 1; i <= 10; i++) {
    numero1Al0.push(i);
}
console.log(numero1Al0)

/* 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola. */

const numerosAleatorios = []
while (numerosAleatorios.length < 10) {
    let numero = Math.floor(Math.random() * 10000)
    numerosAleatorios.push(numero)
} 
console.log(numerosAleatorios)

/* 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola. */

const numerosAleatorios1 = []
while (numerosAleatorios1.length < 10) {
    let numero = Math.floor(Math.random() * 10000)
    numerosAleatorios1.push(numero)
} 
console.log(numerosAleatorios1)
    
/* 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.) */

let listaTextos = ""

while (true) {
    let cadenaDeTexto = prompt("Ingrese una cadena de texto o 'cancelar' para cerrar la ventana: ")
    
    if (cadenaDeTexto === "") {
        alert("Debe ingresar una cadena de texto válida.");
        continue;
    } else if (cadenaDeTexto.toLowerCase() === "cancelar") {
        console.log(listaTextos)
        break;
    } else {
        listaTextos += listaTextos.concat(cadenaDeTexto + " - ")
    }
} /* o puedo usar el array de listaTextos.join(", ") y era mas simple */


let listaTextos1 = []

while (true) {
    let cadenaDeTexto1 = prompt("Nuevamente, ingrese una cadena de texto o 'cancelar' para cerrar la ventana: ")
    
    if (cadenaDeTexto1 === "") {
        alert("Debe ingresar una cadena de texto válida.");
        continue;
    } else if (cadenaDeTexto1.toLowerCase() === "cancelar") {
        console.log(listaTextos1)
        break;
    } else {
        listaTextos1.push(cadenaDeTexto1)
    }
} 

/* 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html. */

function cambioDolaresPesos () {
    const dolar = document.getElementById("dolares").value
    const cambio = 300
    const pesos = dolar * cambio
    document.getElementById("pesos").value = pesos
}