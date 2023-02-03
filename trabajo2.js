// 1.
const param = Math.floor((Math.random() * (100 - 1 + 1)) + 1) 

const numeroRandom = math.floor (param)

const resto = numeroRandom % 2

if (resto === 0) {
    return "Es par"
} else return "Es impar" 

// 2

const tren = "Tren"
const edificio = "Edificio"

if (tren > edificio.lenght) {
    console.log("La palabra " + tren + "es mas larga que la palabra"+ edificio );
}
    else if (edificio > tren.length){

        console.log("La palabra" + edificio + "Es mas larga que la palabra" + tren )
    }
    else{
    console.log("Ambas palabras tienen la misma cantidad de caracteres")
}

// 3

let numero = 1 

while (numero <= 10) {
    let indice = numero
    numero = numero + 1 
    console.log (indice + "x 9 =" + indice *9);
}

//4

function multiplicar (Num) {
    return Num * 23
}
let calculo = multiplicar (17);
console.log(calculo)

//5

let miLista = []

for (i=0; i<10 ; i++) {
    let numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1) 
    miLista.push(numeroRandom);

} 
console.log(miLista);