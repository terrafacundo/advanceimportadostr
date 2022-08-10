

function init(){

//recojiendo elementos del DOM
let contenedor_productos_tendencia = document.getElementById("productos_tendencia");
contenedor_productos_tendencia.className="contenedor_prodcutos_tendencia"
console.log(contenedor_productos_tendencia);







//funcion adicionadora de productos_tendencia al DOM


//     //instanciando
//     let tarjeta_producto = document.createElement("div");
//     let foto_producto = document.createElement("img");
//     let nombre_producto = document.createElement("h2");
//     let precio_producto = document.createElement("button");

//     //asignando
//     foto_producto.innerHTML = `${producto.foto}`;
//     nombre_producto.innerHTML =`${producto.nombre}`;
//     precio_producto.innerHTML = `${producto.precio}`;
// }
function generadora_productos(producto){
for (const producto of productos){
    if (producto.tendencia==true){
        let tarjeta_producto = document.createElement("div");
        let foto_producto = document.createElement("div");
        let nombre_producto = document.createElement("h2");
        let precio_producto = document.createElement("h4");
        let desc_producto = document.createElement("h4");
        let boton_producto = document.createElement("button");
    
        //asignando
        foto_producto.innerHTML = `<img src="${producto.foto}" alt="${producto.nombre}"/>`;
        nombre_producto.innerHTML =`${producto.nombre}`;
        precio_producto.innerHTML = `U$D ${producto.precio}`;
        desc_producto.innerHTML = `${producto.descripcion}`;
        boton_producto.innerHTML = `<a href="">Más info</a>`;

        //clases
        tarjeta_producto.className="tarjeta_producto";
        foto_producto.className="foto_producto";
        nombre_producto.className="nombre_producto";
        precio_producto.className="precio_producto";
        desc_producto.className="desc_producto";
        boton_producto.className="boton_masinfo";

        //imprimiendo
        contenedor_productos_tendencia.append(tarjeta_producto);
        tarjeta_producto.append(foto_producto,nombre_producto,precio_producto,boton_producto);
    }
}
}






















//instanciando en el DOM
generadora_productos();
}