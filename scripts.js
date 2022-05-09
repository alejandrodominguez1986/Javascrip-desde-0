class Producto {
  constructor(id, tipo, nombre, marca, utilidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.nombre = nombre;
        this.utilidad = utilidad;
        this.precio = precio

  }
}

const productos = [
  new Producto (0, "cuchillo", "sierra", "boker", "panaderia", 1000),
  new Producto (1, "cuchillo", "deshuesador", "arbolito", "carnes", 1500),
  new Producto (2, "cuchillo", "santoku", "boker", "pescados", 1900),
  new Producto (3, "cuchillo", "Nakiri", "arbolito", "verduras", 2000),
  new Producto (4, "cuchillo", "fileteador", "universal", "filetear", 1500),
  new Producto (5, "cuchillo", "oficio", "boker", "oficio", 100),
  new Producto (6, "cuchillo", "abreostras", "universal", "ostras", 500),
  new Producto (7, "utensillo", "espatula", "arbolito", "pasteleria", 1000),
  new Producto (8, "utensillo", "miserable", "boker", "pasteleria", 900),
  new Producto (9, "utensillo", "batidor", "boker", "pasteria", 1000),
  new Producto (10, "utensillo", "cornet", "universal", "panaderia", 1500)
]



let inputTextoUtensilio = document.getElementById("inputDeUtensilio")
let almacenDeProductos = document.getElementById("almacenDeProductos")


inputTextoUtensilio.addEventListener('change', () => {
  let buscar = inputTextoUtensilio.value.toLowerCase()
  console.log(buscar)
  let prodABuscar = productos.filter (producto => producto.tipo.includes(buscar) )
  console.log(prodABuscar)
  prodABuscar.forEach(producto => {
      almacenDeProductos.innerHTML += `
    <div class="card" style="width: 18rem;">
       <div class="card-body">
          <h2 class="card-title">${producto.nombre}</h2>
             <h5 class="">${producto.marca}</h5>
             <p class="card-text">${producto.utilidad}</p>
             <p class="card-text">$${producto.precio}</p>
             <p class="card-text">codigo: ${producto.id}</p>
             <button type="button" id="${producto.id}">agregar al carrito </button>
        </div> 
    </div>
      `
  })
})



