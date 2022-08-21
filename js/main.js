// BUSCADOR
// OPERADOR LOGICO OR

let carritoDeCompras = JSON.parse(localStorage.getItem("Carrito de compras")) || []

let contenedorGalletas = document.getElementById ('contenedor-productos-galletas')
let contenedorCaramelos = document.getElementById ('contenedor-productos-caramelos')
let contenedorChocolates = document.getElementById ('contenedor-productos-chocolates')
let contenedorPremezclas = document.getElementById ('contenedor-productos-premezclas')
let contenedorJugos = document.getElementById ('contenedor-productos-jugos')

let carroDiv = document.getElementById ('carro-div')
let usuarioDiv = document.getElementById ('usuario-div')

let stockGalletas = stock.filter (galletas => galletas.tipo === "galletas")
let stockCaramelos = stock.filter (caramelos => caramelos.tipo === "caramelos")
let stockChocolates = stock.filter (chocolates => chocolates.tipo === "chocolates")
let stockPremezclas = stock.filter (premezclas => premezclas.tipo === "premezclas")
let stockJugos = stock.filter (jugos => jugos.tipo === "jugos")

// Sweet Alert

function cartelAprobado() {
}

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
                            <div class="counter">
                                <div onClick="restarCantidades()"class="btn6">-</div>
                                <div id="count">0</div>
                                <div onClick="sumarCantidades()" class="btn5">+</div>
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

    let itemCarrito = stock[item]
    let enCarrito = carritoDeCompras.some(prod => prod.codigo == itemCarrito.codigo)
    let costoCarrito 
    
    if (enCarrito == false) {
        carritoDeCompras.push(itemCarrito)
        itemCarrito.cantidad = 1
      
        
    } else {
        let indexCarrito = carritoDeCompras.findIndex(prod => prod.codigo == itemCarrito.codigo)
        
        costoCarrito = itemCarrito.precio
      
    } 

    const enJSON = JSON.stringify(carritoDeCompras)
    guardarLocal("Carrito de compras", enJSON)

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Agregado al carrito de compras!',
        showConfirmButton: false,
        iconColor: "#fc29c4",
        timer: 1200
    })

    cantidadContador(carritoDeCompras)
}

let total   

    const mostrarCarrito = () => {
    
    total = 0
    carroDiv.innerHTML = ""
    carritoDeCompras.forEach((item) => {
        let div = document.createElement('div')
        total = total += (item.precio *= item.cantidad)
        div.innerHTML = `<div class="Cart-Items">
                        <div class="about">
                            <img src="${item.img}" class="img-size">
                            <h1 class="title">${item.nombre}<h1>
                        </div>
                        <div class="counter"></div>
                            <div class="prices">
                                <div class="amount">$ ${item.precio}</div>
                                <div class="remove">
                                    <button id="remove" onClick="eliminarArticulo(${carritoDeCompras.indexOf(item)})">
                                        Eliminar item
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
        carroDiv.appendChild(div)
    })
    mostrarTotal()
    }

// Cantidades

let cantidadCarrito = 0


const sumarCantidades = (item) => {
    cantidadCarrito++
    
  document.getElementById('count').innertext = cantidadCarrito 
  console.log(item.codigo);
}
const restarCantidades = () => {
    cantidadCarrito--
    document.getElementsByClassName("count").innerText = cantidadCarrito
  }

// Contador del carrito

const contadorCarrito = document.getElementById ('contadorCarrito')

let totalContador

const cantidadContador = (num) => {
     contadorCarrito.innerText = (num).length
}

// Total

const mostrarTotal = () => {

    let div = document.createElement('div')
    div.innerHTML = `<hr> 
                    <div class="checkout">
                        <div class="total">
                        <div>
                    <div class="Subtotal">Total</div>
                        <div class="items">Iva incluido</div>
                        </div>
                    <div class="total-amount">$ ${total}</div>
                    </div>
                    <button class="button">Comprar</button>
                    </div>
                    `
        carroDiv.appendChild(div)
}

// Eliminado item

const eliminarArticulo = (item) => {
    carritoDeCompras.splice (item, 1)
    const enJSON = JSON.stringify(carritoDeCompras)
    guardarLocal("Carrito de compras", enJSON)
    mostrarCarrito()
    cantidadContador(carritoDeCompras)
}

// Eliminar todo

let vaciarCarrito = document.getElementById('Action')

vaciarCarrito.onclick = function() {
    carritoDeCompras = []
    const enJSON = JSON.stringify(carritoDeCompras)
    guardarLocal("Carrito de compras", enJSON)
    contadorCarrito.innerText = '0'
    mostrarCarrito()
}

// Local Storage
                
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
                }
                
// Abrir carrito de compras 
                
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
                
btn.onclick = function() {
    modal.style.display = "block";
    mostrarCarrito()
    }
                
span.onclick = function() {
    modal.style.display = "none";
}
                
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
                    }}
                
// Abrir usuario

let modal3 = document.getElementById("myModal-3");
let btn3 = document.getElementById("myBtn3");
let span3 = document.getElementsByClassName("close-3")[0];
let botonUsuario = document.getElementById("boton-datos");
                
btn3.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
}
}

botonUsuario.onclick = () => {
    obtenerDatos()
}

// AJAX & Fetch
    
    const obtenerDatos = () => {
        fetch('../json/usuarios.json')
        .then(response => response.json())
        .then(result => {
            let datos = result;
            datos.forEach(usuario => {
                usuarioDiv.innerHTML += `
                <div>
                <h3>Usuario: ${usuario.usuario}</h3>
                <h4>Datos:</h4>
                <p>Nombre: ${usuario.nombre}</p>
                <p>Apellido: ${usuario.apellido}</p>
                <p>Edad: ${usuario.edad}</p>
                `
            })
        })
    }
    


    