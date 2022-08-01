// BUSCADOR
// OPERADOR LOGICO OR

let carritoDeCompras = JSON.parse(localStorage.getItem("Carrito de compras")) || []

// let carritoDeCompras = []
// if(localStorage.getItem("Carrito de compras") != null){
//     carritoDeCompras = JSON.parse(localStorage.getItem("Carrito de compras"))
// }

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
    div.innerHTML = `<div class="Cart-Items">
                        <div class="about">
                            <img src="${item.img}" style={{ height="50px" width="50px"}}/>
                            <h1 class="title">${item.nombre}<h1>
                        </div>
                        <div class="counter"></div>
                            <div class="prices">
                                <div class="amount">$ ${item.precio}</div>
                                <div class="remove"><u>Remove</u></div>
                            </div>
                        </div>
                    </div>
                    `
        carroDiv.appendChild(div) 

    })

}

// Local Storage

const guardarLocal = (clave, valor) => {
   localStorage.setItem(clave, valor)
}


            // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
