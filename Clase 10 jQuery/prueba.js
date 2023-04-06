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
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
// en pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y
// mostrarlos en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

array1 = [1,2,3,4,5,6]

// a
console.log("Ejercicio A")

b = 0
while (b < array1.length) {
    console.log(array1[b])
    b += 1
}

// b
console.log("Ejercicio B")

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

// c
console.log("Ejercicio C")

array1.forEach(item => {
    console.log(item)
});

// d
console.log("Ejercicio D")

array1.forEach(item => {
    console.log(item + 1)
});

// e
console.log("Ejercicio E")

let array2 = array1.map(item => {
    return(item + 1)
});
console.log(array2)

// f
console.log("Ejercicio F")

sumaNotas = array2.reduce((acumulador, elemento) => acumulador + elemento, 0)

function calcularPromedio() {
    let promedio = sumaNotas / array2.length;
    console.log(promedio)
}
calcularPromedio()