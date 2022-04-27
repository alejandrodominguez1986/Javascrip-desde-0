/*
let alenota1 = 7;
let alenota2 = 8;
let alenota3 = parseFloat (prompt("ingrese la nota final de ale"));

let joycenota1 = 7;
let joycenota2 = 10;
let joycenota3 = parseFloat (prompt("ingrese la nota final de joyce "));

let joselynnota1 = 10;
let joselynnota2 = 10;
let joselynnota3 = parseFloat (prompt("ingrese la nota final de joselyn "));

let jaironota1 = 8;
let jaironota2 = 9;
let jaironota3 = parseFloat (prompt("ingrese la nota final de jairo "));


function calcularPromedio ( nota1, nota2, nota3) {
    const promedio = ( nota1 + nota2 + nota3) /3;
    return promedio;
}

function isAlumnoAprobado (promedio) {
    if( promedio > 6){
    return  " aprobado ";
}
    return " desaprobado ";
}

const promedioAle = calcularPromedio ( alenota1, alenota2, alenota3);
const promediojoselyn = calcularPromedio ( joselynnota1, joselynnota2, joselynnota3 );
const promediojoyce = calcularPromedio ( joycenota1, joycenota2, joycenota3 );
const promediojairo = calcularPromedio ( jaironota1, jaironota2, jaironota3 );


alert (" ale esta " +  isAlumnoAprobado (promedioAle)+ " con nota " +  promedioAle);
alert (" joselyn esta " + isAlumnoAprobado (promediojoselyn) +  " con nota" + " " + promediojoselyn);
alert (" joyce esta " + isAlumnoAprobado (promediojoyce) +  " con nota" + " " + promediojoyce);
alert (" jairo esta " + isAlumnoAprobado (promediojairo) +  " con nota" + " " + promediojairo);
*/
// COMENTO ESTO POR QUE YA LO REVISASTE 






//declarando mis arrays

let familiaPirela = ["Joselyn", "Joyce", "Jairo", "Ana", "Franklin", "Fabiana", "Orianna", "Enrrique" ]

console.log (familiaPirela)

let familiaDominguez = ["Ruben","Maria", "Fede", "Cele", "Nico", "Delfina", "Bobby", "Luna", "Ale" ]

console.log (familiaDominguez)


//uso del for recorrido del arrays y el uso de la propiedad  length

for (let i = 0 ; i < familiaPirela.length; i++){
    if(i == 4 ){
        break
    }
    console.log (familiaPirela[i])
}

for (let i = 0 ; i < familiaDominguez.length; i++){
    if(i == 4 ){
        continue
    }
    console.log (familiaDominguez[i])
}


//usando la propiedad  push

familiaPirela.push("MAMA CHOSHY")

console.log (familiaPirela)

familiaDominguez.push("Gabriela")

console.log (familiaDominguez)


// usando la propiedad  join
console.log(familiaPirela.join("/"))

console.log(familiaDominguez.join("-"))

//concatenado mis arrays

let losCampanelli = familiaDominguez.concat(familiaPirela)
console.log(losCampanelli)

// usando la propiedad slice y hacer nuestra copia 

let familiaJoselyn = losCampanelli.slice(10,19)
console.log(familiaJoselyn)

let familiaAle = losCampanelli.slice(0,10)
console.log(familiaAle)


//utilizando indexof

let achicamosLaFamilia = prompt("a quien sacamos hoy \n Ruben \n Maria \n Fede \n Cele \n Nico \n Delfina \n Bobby \n Luna \n Ale \n Gabriela \n Joselyn \n Joyce \n Jairo \n Ana \n Franklin \n Fabiana \n Orianna \n Enrrique \n MAMA DE CHOSHY")

let estaDeSuerte = losCampanelli.indexOf(achicamosLaFamilia)

if(estaDeSuerte != -1){
    losCampanelli.splice(estaDeSuerte,1)
} else{
    alert (" no es de esta familia ")
}

console.log(losCampanelli)


//propiedad includes 

console.log(losCampanelli.includes("martin"))
console.log(familiaDominguez.includes("joselyn"))
console.log(familiaPirela.includes("ale"))


class matrimonio{
    constructor(nombre , apellido, nacionalidad, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
    }
}

const hombre1 = new matrimonio ("Alejandro", "Dominguez", "Argentino", 36)
const mujer1 = new matrimonio ("Joselyn", "Pirela", "Venezolana", 30)
const hombre2 = new matrimonio ("jairo", "Pirela", "Venezolano", 40)
const mujer2 = new matrimonio ( "Ana", "Cardenas", "Venezolana", 38)
const hombre3 = new matrimonio ("Franklin", "Torres", "Venezolano", 41)
const mujer3 = new matrimonio ( "joyce", "Pirela", "Venezolana", 38)

let losDom = [ hombre1, mujer1]

console.log(losDom)

let losPirela =  [hombre2, mujer2]

console.log(losPirela)

let losTorres =  [hombre3, mujer3]  

console.log(losTorres)

let familiaPeluche = losDom.concat (losPirela, losTorres)
console.log(familiaPeluche)

for(let matrimonio of familiaPeluche){
    for(let propiedad in matrimonio){
        console.log(matrimonio [propiedad])
    }
}