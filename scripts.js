
class Producto {
  constructor(id, tipo, nombre, marca, utilidad, precio) {
    this.id = id;
    this.tipo = tipo;
    this.marca = marca;
    this.nombre = nombre;
    this.utilidad = utilidad;
    this.precio = precio

  }
}


const productosDisponibles = [
  new Producto(0, "cuchillo", "sierra", "boker", "panaderia", 1000),
  new Producto(1, "cuchillo", "deshuesador", "arbolito", "carnes", 1500),
  new Producto(2, "cuchillo", "santoku", "boker", "pescados", 1900),
  new Producto(3, "cuchillo", "Nakiri", "arbolito", "verduras", 2000),
  new Producto(4, "cuchillo", "fileteador", "universal", "filetear", 1500),
  new Producto(5, "cuchillo", "oficio", "boker", "oficio", 100),
  new Producto(6, "cuchillo", "abreostras", "universal", "ostras", 500),
  new Producto(7, "utensillo", "espatula", "arbolito", "pasteleria", 1000),
  new Producto(8, "utensillo", "miserable", "boker", "pasteleria", 900),
  new Producto(9, "utensillo", "batidor", "boker", "pasteria", 1000),
  new Producto(10, "utensillo", "cornet", "universal", "panaderia", 1500)
]

let carritoCompra = []

let inputTextoUtensilio = document.getElementById("inputDeUtensilio")
let almacenDeProductosDiv = document.getElementById("almacenDeProductos")

let offcanvasRight = document.getElementById("offcanvasRight")



const mostrarProducutos = () => {
  productosDisponibles.forEach(producto => {

    almacenDeProductosDiv.innerHTML += `
            <div id="${producto.id}" class="card " style="width: 18rem;">
              <div class="card-body ">
                  <h2 class="card-title"> ${producto.nombre}</h2>
                    <h5 class="card-title">${producto.marca} </h5>
                    <p class="card-text">${producto.utilidad}</p>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">Codigo: ${producto.id}</p>
                    <button onclick= "agregarACarrito(${producto.id})" type="button" id="botonAgregar${producto.id}" >Agregar al carrito </button>
                    <button onclick= "removerItemCarrito(${producto.id})" type="button" id="botonEliminar${producto.id}" >Eliminas del carrito </button>
                </div> 
            </div>
              `
  })
}




inputTextoUtensilio.addEventListener('change', () => {

  let buscar = inputTextoUtensilio.value.toLowerCase()

  let prodABuscar = productosDisponibles.filter(producto => producto.tipo.includes(buscar))
  almacenDeProductosDiv.innerHTML = ""
  console.log(prodABuscar)
  prodABuscar.forEach(producto => {
    almacenDeProductosDiv.innerHTML += `
    <div id="${producto.id}"  class="card "  style="width: 18rem;">
       <div class="card-body ">
          <h2 class="card-title">${producto.nombre}</h2>
             <h5 class="card-title">${producto.marca}</h5>
             <p class="card-text">${producto.utilidad}</p>
             <p class="card-text">$${producto.precio}</p>
             <p id="text" class="card-text">Codigo: ${producto.id}</p>
             <button onclick= "agregarACarrito(${producto.id})" type="button" id="botonAgregar${producto.id}" >Agregar al carrito </button>
             <button onclick= "removerItemCarrito(${producto.id})" type="button" id="botonEliminar${producto.id}" >Eliminas del carrito </button>
        </div> 
    </div>
    `
  })
})



function agregarACarrito(productoID) {


  let existeProductoEnCarrito = carritoCompra.some(elemento => elemento.producto.id == productoID)

  if (existeProductoEnCarrito) {

    let indiceProductoCarrito = carritoCompra.findIndex(elemento => elemento.producto.id == productoID)
    //console.log("INDEX CARRITO COMPRA: " +  indiceProductoCarrito)
    carritoCompra[indiceProductoCarrito].cant++
    //console.log("CANTIDAD ACTUALZIADA: " +  carritoCompra[indiceProductoCarrito].cant )
  } else {

    let indiceProducto = productosDisponibles.findIndex(producto => producto.id == productoID)

    let productoCarrito = {
      producto: productosDisponibles[indiceProducto],
      cant: 1
    }

    carritoCompra.push(productoCarrito)
    console.log(productoCarrito)
    console.log(carritoCompra)
  }


  let carritoCompraJson = JSON.stringify(carritoCompra)
  localStorage.setItem('agregarACarrito', carritoCompraJson)

}



function removerItemCarrito(productoID) {

  let eliminarProductoEnCarrito = carritoCompra.some(elemento => elemento.producto.id == productoID)

  if (eliminarProductoEnCarrito) {

    let indiceProductoEliminadoCarrito = carritoCompra.findIndex(elemento => elemento.producto.id == productoID)
    //console.log("INDEX CARRITO COMPRA: " +  indiceProductoEliminadoCarrito)
    carritoCompra[indiceProductoEliminadoCarrito].cant--
    //console.log("CANTIDAD ACTUALZIADA: " +  carritoCompra[indiceProductoEliminadoCarrito].cant )
  } else {

    let indiceProductoEliminado = productosDisponibles.findIndex(producto => producto.id == productoID)

    let productoCarrito = {
      producto: productosDisponibles[indiceProductoEliminado],
      cant: 1

    }

    carritoCompra.push(productoCarrito)
    console.log(productoCarrito)
    console.log(carritoCompra)
  }


  let carritoCompraJson = JSON.stringify(carritoCompra)
  localStorage.setItem('removerItemCarrito', carritoCompraJson)
}




  mostrarProducutos();




