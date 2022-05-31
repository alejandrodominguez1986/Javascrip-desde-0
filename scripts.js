const btnMiCarrito = document.querySelector("#btnMiCarrito");
const CarritoCompras = document.querySelector(".CarritoCompras");

btnMiCarrito.addEventListener("click", () => {
  CarritoCompras.classList.toggle("active");
});
//declaramos por medio de una variable nuestro productos para luego ser utilizados
let productos = [
  {
    id: 1,
    nombre: "Sierra",
    precio: 1000,
    marca:  "Boker",
    stock: 10 ,
    uso: "Panaderia",
    imagen: "./images/Sierra.jpg",
  },
  {
    id: 2,
    nombre: "Deshuesador",
    precio: 1500,
    marca:  "Boker",
    stock: 10 ,
    uso: "Carniceria",
    imagen: "./images/Deshuesador.jpg",
  },
  {
    id: 3,
    nombre: "Santoku",
    precio: 1900,
    marca:  "Boker",
    stock: 10 ,
    uso: "Fileteado de pescados",
    imagen: "./images/Santoku.jpg",
  },
  {
    id: 4,
    nombre: "Nakiri",
    precio: 2000,
    marca:  "Arbolito",
    stock: 10 ,
    uso: "Corte de verduras",
    imagen: "./images/Nakiri.jfif",
  },
  {
    id: 5,
    nombre: "Oficio",
    precio: 500,
    marca:  "Boker",
    stock: 10 ,
    uso: "Cuchillo para pelear o tornear",
    imagen: "./images/Oficio.jpg",
  },
  {
    id: 6,
    nombre: "Abreostras",
    precio: 700,
    marca:  "3 Claveles",
    stock: 10 ,
    uso: "Para abrir ostras de forma segura",
    imagen: "./images/Abreostras.jpg",
  },
  {
    id: 7,
    nombre: "Espatula de codo",
    precio: 800,
    marca:  "3 Claveles",
    stock: 10 ,
    uso: "Para la pasteleria",
    imagen: "./images/Espatula de codo.jpg",
  },
  {
    id: 8,
    nombre: "Miserable",
    precio: 1200,
    marca:  "Hudson",
    stock: 10 ,
    uso: "Espatula de silicona para la pasteleria",
    imagen: "./images/Miserable.jfif",
  },
  {
    id: 9,
    nombre: "Batidor",
    precio: 850,
    marca:  "Hudson",
    stock: 10 ,
    uso: "Para mesclar preparaciones",
    imagen: "./images/Batidor.jpg",
  },
  {
    id: 10,
    nombre: "Cornet metalico",
    precio: 730,
    marca:  "universal",
    stock: 10 ,
    uso: "Para la panaderia",
    imagen: "./images/Cornet metalico.jpg",
  },
];
const caja = document.querySelector(".caja");

let carrito = [];

function mostrarProducutos() {
  const cardsMap = productos.map((element) => {
    const { imagen, nombre,uso, precio, id, stock } = element;
    if (stock >= 1) {
      return `<div class="cajita">
      <div class="divImagen">
        <img class="imgDiv" src="${imagen}">
      </div>
      <div>
        <h3>${nombre}</h3>
        <p>$${uso}</p>
        <p>$${precio}</p>
        <p>Stock: ${stock}</p>
        <button id="agregar${id}">Agregar</button>
      </div>
    </div>`;
    } else {
      return `<div class="cajita">
      <div class="divImagen">
        <img class="imgDiv" src="${imagen}">
      </div>
      <div>
         h3>${nombre}</h3>
        <p>$${uso}</p>
        <p>$${precio}</p>
        <p>Stock: ${stock}</p>
        <button disabled="true" id="agregar${id}">Agregar</button>
      </div>
    </div>`;
    }
  });

  caja.innerHTML = cardsMap.join("");

  escucharBotonAgregar();
}

function escucharBotonAgregar() {
  productos.forEach((producto, index) => {
    document
      .querySelector(`#agregar${producto.id}`)
      .addEventListener("click", () => {
        enviarAlCarrito(producto);
      });
  });
}
/*Con esta funcion por medio de los metodos SOME (que verifica la existencia de nuestro producto en el carrito) para luego utilizar el metodo map (para incorporar nuestro producto dentro del carrito )*/
function enviarAlCarrito(producto) {
  const existe = carrito.some((element) => element.id === producto.id);

  productos.map((element) => {
    if (element.id === producto.id) {
      element.stock--;
      return element;
    }
  });

  const productoAlCarrito = { ...producto, cantidad: 1 };
  /*Eliminamos el stock ya que dentro del carrito necesitamos solo la cantidad del producto elegido */
  delete productoAlCarrito.stock;

  if (existe) {
    carrito.map((element) => {
      if (element.id === producto.id) {
        element.cantidad++;
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }
  //llamamos a las funciones para mostrar lo seleccionado previamente//
  mostrarProducutos();
  pintarCarrito();
}

//de esta manerta con un innerHTML creamos cada card para mostrar todos nuestros producctos //
function pintarCarrito() {
  CarritoCompras.innerHTML = "";
  carrito.forEach((element) => {
    CarritoCompras.innerHTML += `<div class="cajita">
        <div class="divImagen" >
          <img class="imgCarritoCompras" src="${element.imagen}">
        </div>
        <div>
          <h3>${element.nombre}</h3>
          <p>$${element.uso}</p>
          <p>$${element.precio}</p>
          <p>Cant.: ${element.cantidad}</p>
          <button class="btnBorrar" id="${element.id}">Eliminar</button>
          </div>
      </div>`;
  });
  borrarProducto();
}

function borrarProducto() {
  let btnBorrar = document.querySelectorAll(".btnBorrar");
  btnBorrar.forEach((element) => {
    element.addEventListener("click", (e) => {
      // selecciono el id del boton //
      let id = parseInt(e.target.id);

      //Necesito verificar la cantidad antes de borrar, la guardo en la variable cantidad.//
      let prod = carrito.find((element) => element.id === id);
      let cantidad = prod.cantidad;
  
      carrito = carrito.filter((element) => element.id !== id);

      // Buscamos el producto, y en su propiedad stock  la cambiamos por  el valor de la variable cantidad //
      let prodCarrito = productos.find((element) => element.id === id);
      prodCarrito.stock += cantidad;

      // llamamos alas funciones para mostrar lo seleccionadpo previamente  //
      pintarCarrito();
      mostrarProducutos();
    });
  });
}

mostrarProducutos();