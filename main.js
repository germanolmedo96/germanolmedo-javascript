// Tienda de colección de indumentaria

alert("Bienvenida/o a la tienda de indumentaria")

let array = [
    {producto: "remera", precio: 500},
    {producto: "campera", precio: 2000},
    {producto: "zapatillas", precio: 2500},
    {producto: "pantalon", precio: 1500},
    {producto: "gorra", precio: 500}
];

alert("A continuación te mostraremos nuestra colección de productos")

array.find(object =>{
    alert("Producto " + object.producto + " - Precio: " + object.precio);
});

let reduce = array.reduce((acumulador, actual) => acumulador + actual.precio, 0);
alert(`Llevate toda la colección por tan solo $${reduce}!!!`);

let respuesta = prompt(`¿Quieres comprar toda la colección?
Responde "si" o "no"`);

if(respuesta.toLowerCase() === "si"){
    alert("Gracias por confiar en nosotros, un vendedor se comunicará en instantes");
}else{
    alert("Lamentamos que no realices la compra, te esperamos de regreso!");
}