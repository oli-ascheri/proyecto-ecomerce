
// BUSCADOR
let carritoDeCompras = []

let contenedorGalletas = document.getElementById ('contenedor-productos-galletas')
let contenedorCaramelos = document.getElementById ('contenedor-productos-caramelos')
let contenedorChocolates = document.getElementById ('contenedor-productos-chocolates')
let contenedorPremezclas = document.getElementById ('contenedor-productos-premezclas')
let contenedorJugos = document.getElementById ('contenedor-productos-jugos')

let stockGalletas = stock.filter (galletas => galletas.tipo === "galletas")
let stockCaramelos = stock.filter (caramelos => caramelos.tipo === "caramelos")
let stockChocolates = stock.filter (chocolates => chocolates.tipo === "chocolates")
let stockPremezclas = stock.filter (premezclas => premezclas.tipo === "premezclas")
let stockJugos = stock.filter (jugos => jugos.tipo === "jugos")

let codigoGalletas = stock.filter (galletas => galletas.codigo === "galletas")



//Ecomerce

const carrito = []

//  function mostrarProductos(stock, contenedor){

//      stock.forEach((item) => {
//      let div = document.createElement('div')
//      div.className = 'producto'
//      div.innerHTML = `<div class="card">
//                          <div class="card-image">
//                              <img src="${item.img}">
//                              <span class="card-title">${item.nombre}</span>
//                          </div>
//                          <div class="card-content">
//                              <p>$${item.precio}</p>
//                          </div>
//                          <div class="car-content">
//                              <button id="${item}" class="car-buttom">
//                                  <i class="fa fa-cart-shopping">
//                                  </i>
//                                  <a href="#"> Agregar al carrito 
//                                  </a>
//                              </button>
//                          </div>
//                      </div>
//                      `
//          contenedor.appendChild(div) 
         
//      })

//  }

