/*let ale;
for(ale = 0; ale < 8; ale++){
    if(ale ===5) continue;
    console.log(ale);
}
console.log ("fuera del for", ale);

let all;
for(all = 0; ale < 10; all++){
    if(all ===5) break;
    console.log(all);
}
console.log ("fuera del for", all);*/

/*Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let x = 1; x <= 10; x++) {
    let resultado = ingresarNumero * x ;
    alert(ingresarNumero +" X "+ x +" = "+ resultado);
}*/

/*
let num = 0
while(num < 3){
    console.log(num);
    num++;
}*/

/*let num= 5;
do{
    console.log(num);
    num++;   
} while(num < 3);*/

/*
for(let i= 10; i> 0; i--){
    if(i === 1){
        console.log (i + "auto");
    } else {
        console.log( i + "auto")
    }
}*/




/*let presupuestoDia = parseFloat(prompt("INGRESAR TU PRESUPUESTO DIARIO"));
if ((presupuestoDia >= 0) && (presupuestoDia <= 1000)) {
    alert("PRESUPUESTO AL HORNO");
} else if ((presupuestoDia >= 1001) && (presupuestoDia <= 3000)) {
    alert("PRESUPUESTO SAFA");
} else if (presupuestoDia > 3000) {
    alert("PRESUPUESTO A DARSE GUSTITOS");
}
else {
    alert("ERROR");
}*/

let color = "" 
while (color != "rojo"){ 
       color = prompt("dame un color (escribe rojo para salir)") 
}