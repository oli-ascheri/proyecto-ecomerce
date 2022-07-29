// BUSCADOR
let carritoDeCompras = []

if(localStorage.getItem("Carrito de compras") != null){
    carritoDeCompras = JSON.parse(localStorage.getItem("Carrito de compras"))
}

let contenedorGalletas = document.getElementById ('contenedor-productos-galletas')
let contenedorCaramelos = document.getElementById ('contenedor-productos-caramelos')
let contenedorChocolates = document.getElementById ('contenedor-productos-chocolates')
let contenedorPremezclas = document.getElementById ('contenedor-productos-premezclas')
let contenedorJugos = document.getElementById ('contenedor-productos-jugos')

let carroDiv = document.getElementById ('carro-div')

let stockGalletas = stock.filter (galletas => galletas.tipo === "galletas")
let stockCaramelos = stock.filter (caramelos => caramelos.tipo === "caramelos")
let stockChocolates = stock.filter (chocolates => chocolates.tipo === "chocolates")
let stockPremezclas = stock.filter (premezclas => premezclas.tipo === "premezclas")
let stockJugos = stock.filter (jugos => jugos.tipo === "jugos")

//Ecomerce

  function mostrarProductos(stockF, contenedor){

    stockF.forEach((item) => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src="${item.img}">
                                <span class="card-title">${item.nombre}</span>
                            </div>
                            <div class="card-content">
                                <p>$${item.precio}</p>
                            </div>
                            <div class="car-content">
                                <button onClick="agregarCarrito(${stock.indexOf(item)})" id="boton" class="car-buttom">
                                        Agregar al carrito
                                    <i class="fa fa-cart-shopping">
                                    </i>
                                </button>
                            </div>
                        </div>
                        `
            contenedor.appendChild(div) 

        })
    
 }

// Carrito

 const agregarCarrito = (item) => {
    carritoDeCompras.push(stock[item])
    console.log(carritoDeCompras)
    const enJSON = JSON.stringify(carritoDeCompras)
    guardarLocal("Carrito de compras", enJSON)

    carritoDeCompras.forEach((item) => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="Cart-Items">
                            <div class="about">
                                <h1 class="title">${item.nombre}<h1>
                                <h3 class="subtitle">250ml</h3>
                                <img src="${item.img}" style={{ height="30px" }}/>
                            </div>
                            <div class="counter"></div>
                            <div class="prices"></div>
                        </div>
                        `
            carroDiv.appendChild(div) 

        })
}

// Local Storage

const guardarLocal = (clave, valor) => {
   localStorage.setItem(clave, valor)
}

// Carrito de compras
