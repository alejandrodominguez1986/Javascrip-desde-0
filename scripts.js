let salsaElegida 
let prodElegido

class salsasMadres{
    constructor(id, nombre, tipo, dificultad, maridaje, precio){
        this.id = id
        this.nombre = nombre;
        this.tipo = tipo;
        this.dificultad = dificultad;
        this.maridaje = maridaje;
        this.precio = precio
    }
}

class producto {
    constructor(id,ingrediente,tipo, tiempo, presentacion, valor){
        this.id = id
        this.ingrediente = ingrediente;
        this.tipo = tipo;
        this.tiempo = tiempo;
        this.presentacion = presentacion;
        this.valor = valor
    }
}

const bechamel = new salsasMadres(1,"bechamel","leche", "baja", "fideos",50);
const parisienne = new salsasMadres(2,"parisienne", "crema", "medio", "pollo", 70);
const boloñesa = new salsasMadres(3,"boloñesa", "carne", "medio", "spaguetti", 90);
const limon = new salsasMadres(4,"limon", "caldo", "medio", "pescados", 30);
const holandesa = new salsasMadres(5,"holandesa", "huevo", "dificil", "huevos", 120);
const pomodoro = new salsasMadres(6,"pomodoro", "tomate", "facil", "pastas", 80);


const spaguetti = new producto(1,"spaguetti","seco", 13 , "bolsa", 20);
const sorrentinos = new producto(2,"sorrentinos","fresco", 3 , "caja", 110);
const salmon = new producto(3,"salmon","fresco", 25 , "penca", 200);
const lomo = new producto(4,"lomo","fresco", 20 , "bifes", 180);
const pechuga = new producto(5,"pechuga","fresco", 25 , "pieza", 70);
const huevo = new producto(6,"huevo","fresco", 5 , "unidad", 20);

const salsa = [bechamel , parisienne, boloñesa, limon, holandesa, pomodoro];
const productos = [ spaguetti, sorrentinos, salmon, lomo, pechuga, huevo];

console.log (salsa);
console.log (productos);

const elCarrito = []  

const card = document.querySelector(".card");

const saludar = () => {
    alert("Bienvenido a Fatto in casa cocina de autor");
    let nombre = prompt("Ingrese su nombre: ");
    while (!isNaN(nombre)) {
      nombre = prompt("Ingrese su nombre");
    }
    card.innerHTML = `<h1>Bienvenido ${nombre.toUpperCase()}</h1>`;
  };

 const eligeUno = () => {
    let platoE = "";
    for (const alimento of salsa) {
        platoE += `${alimento.id}) ${alimento.nombre}\n`;
    }
    let platoAe = parseInt(prompt(`Que salsa elige ? :\n${platoE} `));

  while (platoAe > 6 || platoAe < 1 || isNaN(platoAe)) {
    platoAe = parseInt(prompt(`Que salsa elige ? :\n${platoE} `));
  }

  return platoAe;
    }

const salsaLlevar = () => {
        let buscarSalsa = salsa.find( (element) => element.id === salsaElegida );
        
        let existencia = elCarrito.some((element) => element.id === salsaElegida);

        if (existencia){
            buscarSalsa.cantidad++;
        }else {
            buscarSalsa.cantidad = 1;  
            elCarrito.push(buscarSalsa);
        }       

        const continuar = confirm ("algo mas para elegir");

        if(continuar){
          salsaElegida = eligeUno();
          salsaLlevar();
        }
      };


const elecciones = () =>{
    const divCaja = document.createElement("div");
    divCaja.className = "card2";
    card.appendChild(divCaja);

    elCarrito.forEach(element=>{
        divCaja.innerHTML += `<div class= card2>
        <p>${element.nombre}</p>
        <p>${element.tipo}</p>
        <h3> Subtotal: $${element.precio * element.cantidad}</h3>
        <p>${element.cantidad}</p>
        </div>`
    })
};



 const eligeProd = () => {
    let prodE = "";
    for (const producto of productos) {
        prodE += `${producto.id}) ${producto.ingrediente}\n`;
    }
    let prodAe = parseInt(prompt(`Que salsa elige ? :\n${prodE} `));

  while (prodAe > 6 || prodAe < 1 || isNaN(prodAe)) {
    prodAe = parseInt(prompt(`Que salsa elige ? :\n${prodE} `));
  }

  return prodAe;
    }

const prodLlevar = () => {
        let buscarProd = productos.find( (element) => element.id === prodElegido );
        
        let deposito = elCarrito.some((element) => element.id === prodElegido);

        if (deposito){
            buscarProd.cantidades ++;
        }else {
            buscarProd.cantidades = 1;  
            elCarrito.push(buscarProd);
        }       

        const continuar = confirm ("algo mas para elegir");

        if(continuar){
          prodElegido = eligeProd();
          prodLlevar();
        }
      };


const eleccion = () =>{
    const divCaja = document.createElement("div");
    divCaja.className = "card3";
    card.appendChild(divCaja);

    elCarrito.forEach(element=>{
        divCaja.innerHTML += `<div class= card3>
        <p>${element.ingrediente}</p>
        <p>${element.tipo}</p>
        <h3> Subtotal: $${element.valor * element.cantidad}</h3>
        <p>${element.cantidades}</p>
        </div>`
    })
};
    


saludar();
salsaElegida = eligeUno();
prodElegido = eligeProd();
salsaLlevar();
prodLlevar();
elecciones();
eleccion();