let stock = [
    //caramelos
    {nombre: "Beldent Menta", tipo: "caramelos", id: 5076, precio: 320, img: '../img/beldent-menta.jpg'},
    {nombre: "Beldent Menta fuerte", tipo: "caramelos", codigo: 5078, precio: 320, img: '../img/beldent-negro.jpg'},
    {nombre: "Beldent Mentol", tipo: "caramelos", codigo: 5080, precio: 320, img: '../img/beldent-mentol.jpg'},
    {nombre: "Beldent Tuti fruti", tipo: "caramelos", codigo: 5086, precio: 320, img: '../img/beldent-tuti.jpg'},
    {nombre: "Beldent Frutilla", tipo: "caramelos", codigo: 5083, precio: 320, img: '../img/beldent-frutilla.jpg'},
    {nombre: "Halls Mentol", tipo: "caramelos", codigo: 5206, precio: 310, img: '../img/halls-mentol.jpg'},
    {nombre: "Halls Menta fuerte", tipo: "caramelos", codigo: 5204, precio: 310, img: '../img/halls-menta-fuerte.jpg'},
    {nombre: "Halls Menta", tipo: "caramelos", codigo: 5208, precio: 310, img: '../img/halls-menta.jpg'},
    {nombre: "Halls Miel y limon", tipo: "caramelos", codigo: 5210, precio: 310, img: '../img/halls-miel.jpg'},

    //galletas
    {nombre: "Oreo", tipo: "galletas", codigo: 119, precio: 69, img: '../img/oreo.jpg'},
    {nombre: "Pepitos", tipo: "galletas", codigo: 114, precio: 69, img: '../img/pepitos.jpg'},
    {nombre: "Solar", tipo: "galletas", codigo: 103, precio: 55, img: '../img/solar.jpg'},
    {nombre: "Minisolar", tipo: "galletas", codigo: 103, precio: 55, img: '../img/minisolar.jpg'},
    {nombre: "Lulu Wafle Chocolate", tipo: "galletas", codigo: 23, precio: 62, img: '../img/lulu-choco.jpg'},
    {nombre: "Lulu Rellena Chantilly", tipo: "galletas", codigo: 27, precio: 50, img: '../img/lulu-chantilly.jpg'},
    {nombre: "Sensacion", tipo: "galletas", codigo: 106, precio: 79, img: '../img/sensacion.jpg'},
    {nombre: "Agua", tipo: "galletas", codigo: 1, precio: 35, img: '../img/agua.jpg'},
    {nombre: "Malteada C/sal", tipo: "galletas", codigo: 5, precio: 80, img: '../img/malteada-csal.jpg'},
    {nombre: "Malteada S/sal", tipo: "galletas", codigo: 6, precio: 85, img: '../img/malteada-ssal.jpg'},
    {nombre: "Salvado C/sal", tipo: "galletas", codigo: 7, precio: 90, img: '../img/salvado-csal.jpg'},
    {nombre: "Salvado S/sal", tipo: "galletas", codigo: 8, precio: 95, img: '../img/salvado-ssal.jpg'},

    //chocolates
    {nombre: "Milka Leche", tipo: "chocolates", codigo: 197, precio: 160, img: '../img/milka-leche.jpg'},
    {nombre: "Milka Oreo", tipo: "chocolates", codigo: 194, precio: 160, img: '../img/milka-oreo.jpg'},
    {nombre: "Milka Almendras", tipo: "chocolates", codigo: 195, precio: 160, img: '../img/milka-almendras.jpg'},
    {nombre: "Milka Castanas", tipo: "chocolates", codigo: 196, precio: 160, img: '../img/milka-castanas.jpg'},
    {nombre: "Alfajor Oreo", tipo: "chocolates", codigo: 230, precio: 35, img: '../img/alfajor-oreo.jpg'},
    {nombre: "Alfajor Pepitos", tipo: "chocolates", codigo: 229, precio: 35, img: '../img/alfajor-pepitos.jpg'},
    {nombre: "Alfajor Milka Mouse", tipo: "chocolates", codigo: 219, precio: 35, img: '../img/milka-mouse.jpg'},
    {nombre: "Alfajor Milka Dulce de leche", tipo: "chocolates", codigo: 220, precio: 35, img: '../img/milka-ddl.jpg'},
    {nombre: "Alfajor Shot", tipo: "chocolates", codigo: 263, precio: 35, img: '../img/shot.jpg'},

    //premezclas
    {nombre: "Gelatina Frutilla", tipo: "premezclas", codigo: 541, precio: 125, img: '../img/gelatina-frutilla.jpg'},
    {nombre: "Gelatina Cereza", tipo: "premezclas", codigo: 542, precio: 125, img: '../img/gelatina-cereza.jpg'},
    {nombre: "Gelatina Durazno", tipo: "premezclas", codigo: 543, precio: 125, img: '../img/gelatina-durazno.jpg'},
    {nombre: "Gelatina Manzana", tipo: "premezclas", codigo: 544, precio: 125, img: '../img/gelatina-manzana.jpg'},
    {nombre: "Postre Chocolate", tipo: "premezclas", codigo: 6023, precio: 97, img: '../img/postre-chocolate.jpg'},
    {nombre: "Postre Vainilla", tipo: "premezclas", codigo: 6024, precio: 97, img: '../img/postre-vainilla.jpg'},
    {nombre: "Postre Caramelo", tipo: "premezclas", codigo: 6025, precio: 97, img: '../img/postre-caramelo.jpg'},
    {nombre: "Bizcochuelo Vainilla", tipo: "premezclas", codigo: 5970, precio: 185, img: '../img/bizcochuelo-vainilla.jpg'},
    {nombre: "Bizcochuelo Chocolate", tipo: "premezclas", codigo: 5969, precio: 185, img: '../img/bizcochuelo-chocolate.jpg'},
    {nombre: "Polvo de hornear chico", tipo: "premezclas", codigo: 501, precio: 25, img: '../img/royal-chico.jpg'},
    {nombre: "Polvo de hornear grande", tipo: "premezclas", codigo: 1502, precio: 50, img: '../img/royal-grande.jpg'},
    {nombre: "Gelatina S/sabor", tipo: "premezclas", codigo: 5635, precio: 68, img: '../img/gelatina-sinsabor.jpg'},

    //jugos
    {nombre: "Clight Naranja", tipo: "jugos", codigo: 330, precio: 20, img: '../img/clight-naranja.jpg'},
    {nombre: "Clight Naranja-durazno", tipo: "jugos", codigo: 336, precio: 20, img: '../img/clight-nar-dur.jpg'},
    {nombre: "Clight Naranja dulce", tipo: "jugos", codigo: 337, precio: 20, img: '../img/clight-nar-dulce.jpg'},
    {nombre: "Clight Naranja-mango", tipo: "jugos", codigo: 338, precio: 20, img: '../img/clight-nar-mango.jpg'},
    {nombre: "Clight Pomelo rosa", tipo: "jugos", codigo: 339, precio: 20, img: '../img/clight-pomelo.jpg'},
    {nombre: "Tang Naranja", tipo: "jugos", codigo: 303, precio: 18, img: '../img/tang-naranja.jpg'},
    {nombre: "Tang Multifruta", tipo: "jugos", codigo: 305, precio: 18, img: '../img/tang-multi.jpg'},
    {nombre: "Tang Pera", tipo: "jugos", codigo: 306, precio: 18, img: '../img/tang-pera.jpg'},
    {nombre: "Tang Durazno", tipo: "jugos", codigo: 308, precio: 18, img: '../img/tang-durazno.jpg'},
]