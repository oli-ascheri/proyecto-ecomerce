// Productos //

function producto(nombre,precio,codigo){
    this.nombre = nombre
    this.precio = precio
    this.codigo = codigo
}

const productoOreo = new producto ("OREO",69,119)
const productoPepitos = new producto ("PEPITOS",69,114)
const productoMilka = new producto ("MILKA",160,197)
const productoBeldent = new producto ("BELDENT",310,5078)
const productoHalls = new producto ("HALLS",320,5204)
const productoTang = new producto ("TANG",280,300)
const productoClight = new producto ("CLIGHT",290,333)

// Informacion // 

function mostrarArticulo (nombre,precio,codigo){
    alert ("Articulo: " + nombre + " / Precio: $" + precio + " / Codigo: " + codigo)
}

function informacionProductos() {
    let producto = prompt("Lista de productos: OREO / PEPITOS / MILKA / BELDENT / HALLS / TANG / CLIGHT / SALIR").toUpperCase()
    
    while ( producto != "SALIR"){

        switch (producto) {
            case "OREO":
                mostrarArticulo (productoOreo.nombre, productoOreo.precio, productoOreo.codigo)
                break
            case "PEPITOS":
                mostrarArticulo (productoPepitos.nombre, productoPepitos.precio, productoPepitos.codigo)
                break
            case "MILKA":
                mostrarArticulo (productoMilka.nombre, productoMilka.precio, productoMilka.codigo)
                break
            case "BELDENT":
                mostrarArticulo (productoBeldent.nombre, productoBeldent.precio, productoBeldent.codigo)
                break
            case "HALLS":
                mostrarArticulo (productoHalls.nombre, productoHalls.precio, productoHalls.codigo)
                break
            case "TANG":
                mostrarArticulo (productoTang.nombre, productoTang.precio, productoTang.codigo)
                break
            case "CLIGHT":
                mostrarArticulo (productoClight.nombre, productoClight.precio, productoClight.codigo)  
                break
            default: 
                alert("Por favor, escriba nuevamente alguna de las opciones disponibles.")
        }
    
        producto = prompt("Lista de productos: OREO / PEPITOS / MILKA / BELDENT / HALLS / TANG / CLIGHT / SALIR").toUpperCase()
    
    }

}

// COMPRAR // 

let total = 0
let cantidad = 0

function sumaTotal (precio) {
    total += precio
}

function mostrarTotal (total) {
    alert("El total es de $" + total)
}

function sumar (num1, num2){
    return num1 + num2
}

function multiplicar (num1,num2) {
    return num1 * num2
}

function listaDeProductos () {
    let productos = prompt("Ingresar cantidad: OREO / PEPITOS / MILKA / BELDENT / HALLS / TANG / CLIGHT / TOTAL / OK = comprar / SALIR").toUpperCase()

    while ( productos != "SALIR"){

        switch (productos) {
            case "OREO":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoOreo.precio,cantidad)
                sumaTotal(multiplicar (productoOreo.precio,cantidad))
                mostrarTotal(total)
                break
            case "PEPITOS":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoPepitos.precio,cantidad)
                sumaTotal(multiplicar (productoPepitos.precio,cantidad))
                mostrarTotal(total)
                break
            case "MILKA":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoMilka.precio,cantidad)
                sumaTotal(multiplicar (productoMilka.precio,cantidad))
                mostrarTotal(total)
                break
            case "BELDENT":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoBeldent.precio,cantidad)
                sumaTotal(multiplicar (productoBeldent.precio,cantidad))
                mostrarTotal(total)
                break
            case "HALLS":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoHalls.precio,cantidad)
                sumaTotal(multiplicar (productoHalls.precio,cantidad))
                mostrarTotal(total)
                break
            case "TANG":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoTang.precio,cantidad)
                sumaTotal(multiplicar (productoTang.precio,cantidad))
                mostrarTotal(total)
                break
            case "CLIGHT":
                cantidad = parseInt(prompt("Cantidad:"))
                multiplicar (productoClight.precio,cantidad)
                sumaTotal(multiplicar (productoClight.precio,cantidad))
                mostrarTotal(total)
                break
            case "TOTAL":
                    mostrarTotal(total)
                    break
            case "OK":
                    consultaComprar ()
                    break
            default: 
                alert("Por favor, escriba nuevamente alguna de las opciones disponibles.")
        }
    
        productos = prompt("Ingresar cantidad: OREO / PEPITOS / MILKA / BELDENT / HALLS / TANG / CLIGHT / TOTAL / OK = comprar / SALIR").toUpperCase()
    }
}

function restarIva (num3) {
    return num3 / 1.21
}

// Vendedores 

//lista

 let vendedores = ['Daniel Pallares' , 'Jorge Gonzales' , 'Kathy Soraz' , 'Gabriel Pallas' , 'Federico Ramirez' , 'Leonelo Archeri']

 function listaVendedores () {
     alert (vendedores.join(', '))
 }
 
let nuevoVendedor

//asignar

function asignarVendedor () {
    nuevoVendedor = prompt("Ingrese nombre y apellido del vendedor:")
    vendedores.push(nuevoVendedor)
    alert(vendedores.join(', '))
}

//eliminar

function eliminarVendedor () {
    let borrar = prompt("Ingrese nombre del vendedor que desee eliminar")
    const findProduct = (vendedores.find(item => item == borrar))
    const productIndex = vendedores.indexOf(findProduct)
    vendedores.splice(productIndex, 1)
    alert (vendedores.join(', '))
}

// Vendedores - estructura general

 function opcionesVendedor() {
     let consultaVendedor = prompt("LISTA = Lista de vendedores / ASIGNAR = Asignar vendedor / ELIMINAR = Eliminar vendedor / SALIR").toUpperCase()
    
     while ( consultaVendedor != "SALIR"){

         switch (consultaVendedor) {
             case "LISTA":
                 listaVendedores ()
                 break
             case "ASIGNAR":
                 asignarVendedor ()
                 break
             case "ELIMINAR":
                 eliminarVendedor()
                 break
             default: 
                 alert("Por favor, escriba nuevamente alguna de las opciones disponibles.")
         }
    
         consultaVendedor = prompt("LISTA = Lista de vendedores / ASIGNAR = Asignar vendedor / ELIMINAR = Eliminar vendedor / SALIR").toUpperCase()
     }
}

// Estructura general //

alert("¡Te damos la bienvenida a Dulzura Company! Selecciona que quieres hacer:")
let decision = prompt("INFORMACION: Detalles de nuestros productos / COMPRAR: Comprar productos / VENDEDORES: Caracteristicas fuerza de ventas / SALIR").toUpperCase()

while ( decision != "SALIR"){

    switch (decision) {
        case "INFORMACION":
            informacionProductos ();
            break
        case "COMPRAR":
            listaDeProductos ();
            break
        case "VENDEDORES":
            opcionesVendedor();
            break
        default: 
            alert("Por favor, escriba nuevamente alguna de las opciones disponibles.")
    }

    decision = prompt("INFORMACION: Detalles de nuestros productos / COMPRAR: Comprar productos / VENDEDORES: Caracteristicas fuerza de ventas / SALIR").toUpperCase()

}


