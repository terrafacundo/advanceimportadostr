function init_productos(){
//funcion en pag catalogo
//tomando nodos
let contenedor_productos_catalogo = document.getElementById("contenedor_resultados");
let tarjeta_producto_catalogo="";

function generadora_catalogo(y){


    y.forEach((producto)=>{
            //declarando afuera para evitar redeclaraciones en cada loop
            tarjeta_producto_catalogo = document.createElement("div");
            let foto_producto_catalogo = document.createElement("div");
            let nombre_producto_catalogo = document.createElement("h2");
            let precio_producto_catalogo= document.createElement("h4");
            let boton_producto_catalogo = document.createElement("button");
            ////

            //asignando
            foto_producto_catalogo.innerHTML = `<img src="${producto.foto}" alt="${producto.nombre}"/>`;
            nombre_producto_catalogo.innerHTML =`${producto.nombre}`;
            precio_producto_catalogo.innerHTML = `U$D ${producto.precio}`;
            boton_producto_catalogo.innerHTML = `<a href="">Más info</a>`;
    
            //clases
            tarjeta_producto_catalogo.classList.add("tarjeta_producto");
            foto_producto_catalogo.classList.add("foto_producto");
            nombre_producto_catalogo.classList.add("nombre_producto");
            precio_producto_catalogo.classList.add("precio_producto");
            boton_producto_catalogo.classList.add("boton_masinfo");

            //imprimiendo
            contenedor_productos_catalogo.append(tarjeta_producto_catalogo);
            tarjeta_producto_catalogo.append(foto_producto_catalogo,nombre_producto_catalogo,precio_producto_catalogo,boton_producto_catalogo)
        })
        

}

let entrada ="";
    //funcion filtrado por barra de búsqueda
            //tomo el nodo de busqueda y lo normalizo
        let buscador = document.getElementById("input_busqueda_productos");        

        buscador.addEventListener('input', filtrado_por_buscador)

        function filtrado_por_buscador(){
            contenedor_productos_catalogo.innerHTML="";
            entrada = buscador.value.toLowerCase();
            console.log(entrada);

            //lo instancio el array, y despues pusheo
            nuevo_Array_buscados=[];            

            productos.forEach((item)=>{
                let parametro = item.nombre;
                if(parametro.toLowerCase().includes(entrada)){
                    //hasta aca funciona a la perfeccion
                    contenedor_productos_catalogo.innerHTML="";
                    nuevo_Array_buscados.push(item);
                }
                else{
                    contenedor_productos_catalogo.innerHTML="";
                }
            })
            generadora_catalogo(nuevo_Array_buscados);

            //funcion que se encarga de aclarar la nulidad del contenido
            if (contenedor_productos_catalogo.innerHTML==""){
                let error_busqueda= document.createElement("h2");
                error_busqueda.innerHTML="Producto/s no encontrado.";
                contenedor_productos_catalogo.append(error_busqueda);
            }
        }

            
            //asociar lo escrito a un valor

        // buscador.addEventListener("keyup", e=>{
        //     // e.target.matches("#input_busqueda_productos");
        //     // console.log(e.target.value);

        //     if (e.target.matches("#input_busqueda_productos")){
        //     //hasta este punto registra lo ingresado´
        //     entrada = e.target.value;
        //     }
        //     // const filtrado_nuevo_array_buscador_por_texto = productos.filter(producto => producto.marca  === entrada.toLowerCase());
        //     //funciona pero no con un include
        //     if entrada.toLowerCase().includes(filter.toLowerCase)

        //     console.log(filtrado_nuevo_array_buscador_por_texto);
        //     })


    //funcion filtro por categoria

            //asignacion de botones a nodos
            let filtro_all = document.getElementById('boton_todos');
            let filtro_ap = document.getElementById("boton_busqueda_apple");
            let filtro_gm = document.getElementById("boton_busqueda_gaming");
            let filtro_min = document.getElementById("boton_busqueda_mineria");
            let filtro_acc = document.getElementById("boton_busqueda_accesorios");




            //Otorgandole funcion a esos nodos
            filtro_all.addEventListener("click", ()=>{
                contenedor_productos_catalogo.innerHTML="";
                generadora_catalogo(productos);
            });

            filtro_ap.addEventListener("click", ()=>{
                contenedor_productos_catalogo.innerHTML="";
                filtrado_por_demanda('apple');
            });
            filtro_gm.addEventListener("click", ()=>{
                contenedor_productos_catalogo.innerHTML="";
                filtrado_por_demanda('gaming')});

            filtro_min.addEventListener("click", ()=>{
                contenedor_productos_catalogo.innerHTML="";
                filtrado_por_demanda('mineria')});
                
            filtro_acc.addEventListener("click", ()=>{
                contenedor_productos_catalogo.innerHTML="";
                filtrado_por_demanda('accesorios')});
    
            //funcion
            function filtrado_por_demanda(valor){
                const filtrado_nuevo_array = productos.filter(producto=> producto.categoria === valor);
                generadora_catalogo(filtrado_nuevo_array);
            }



    //instanciando en el DOM
            generadora_catalogo(productos);
    // generadora_catalogo(productos);
}