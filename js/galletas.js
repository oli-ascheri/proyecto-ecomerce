
let boton

function mostrarConsola () {
    console.log("respuesta evento");
}

boton = document.getElementById("${item.codigo}")



stockGalletas.forEach((item) => {
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
                            <button id="${item.codigo}" class="car-buttom">
                                    Agregar al carrito
                                <i class="fa fa-cart-shopping">
                                </i>
                            </button>
                        </div>
                    </div>
                    `
        contenedorGalletas.appendChild(div) 

        boton.addEventListener("click", mostrarConsola)

    })
















// mostrarProductos(stockGalletas, contenedorGalletas)





