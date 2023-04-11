// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
// desordenada. Tiene que crear la lista uno mismo.

let array = []

function numeroRandom() {
    return parseInt(Math.random() * (200000 - 0) + 0);
}

for (let i = 0; i <= 10; i++) {
    array.push(numeroRandom())
}

const arrayOrdenado = array.sort(function(a, b) {return a - b})

let crearLista = document.getElementById("crear-lista")
crearLista.addEventListener("click", crearListaDesordenada)

function crearListaDesordenada(){
    document.getElementById("texto").innerHTML = "<h4>Lista:</h4>"
    document.getElementById("fin").innerHTML = "<h5>Fín</h4>"
    document.createElement("ul");
    for (let i = 0; i < arrayOrdenado.length; i++) {
        document.getElementById("lista").innerHTML += "<li>" + arrayOrdenado[i];
    }
    crearLista.removeEventListener("click", crearListaDesordenada);
}

// 2. Dado el array = [1,2,3,4,5,6]

array1 = [1,2,3,4,5,6]

// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
console.log("Punto 2 \nEjercicio A")

b = 0
while (b < array1.length) {
    console.log(array1[b])
    b += 1
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
console.log("Ejercicio B")

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
console.log("Ejercicio C")

array1.forEach(item => {
    console.log(item)
});

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log("Ejercicio D")

array1.forEach(item => {
    console.log(item + 1)
});

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
console.log("Ejercicio E")

let array2 = array1.map(item => {
    return(item + 1)
});
console.log(array2)

// f. Calcular el promedio.
console.log("Ejercicio F")

sumaNotas = array2.reduce((acumulador, elemento) => acumulador + elemento, 0)

function calcularPromedio() {
    let promedio = sumaNotas / array2.length;
    console.log(promedio)
}
calcularPromedio()

// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.

console.log("Punto 3")
array1.forEach(item => {
    console.log(item ** 2)
})

// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

console.log("Punto 4")
array3 = [1, -4, 12, 0, -3, 29, -150]

array3Positivos = array3.filter(item => item >= 0)
let reductora = (acumulador, elemento) => acumulador + elemento;
total = array3Positivos.reduce(reductora)
console.log(total)

// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

console.log("Punto 5")
arrayNombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]

// a. Obtener aquellos nombres con al menos 6 letras.
console.log("Ejercicio A")
nombres6Letras = arrayNombres.filter(item => item.length >= 6)
console.log(nombres6Letras)

// b. Obtener los nombres que comienzan con "M".
console.log("Ejercicio B")
nombresConM = arrayNombres.filter(item => item[0] === "M")
console.log(nombresConM)

// c. Ordenar alfabéticamente y mostrar por consola.
console.log("Ejercicio C")
arrayNombres1 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"] /* Porque el sort es destructivo */
nombresOrdenados = arrayNombres1.sort()
console.log(nombresOrdenados)

// d. Generar un array que contenga solo las iniciales
console.log("Ejercicio D")
nombresIniciales = arrayNombres.map(items => {
    return(items[0])
})
console.log(nombresIniciales)

// f. Generar un array que contenga todos los nombres en mayúscula.
console.log("Ejercicio F")
nombresMayuscula = arrayNombres.map(nombres => {
    return(nombres.toUpperCase())
})
console.log(nombresMayuscula)

// g. Queremos saber si alguno de estos nombres comienza con "J”
console.log("Ejercicio G")
nombresConJ = arrayNombres.includes(arrayNombres[0] === "J")
console.log(nombresConJ)