import { productos } from "./models.js"

export function listarProductos(){
    for(let index = 0; index < 2; index++){
        console.log(productos[index])
    }
}

export function buscarProducto(){
    let id = prompt("Ingrese el id del producto a Buscar: ")
    for(let index = 0; index < productos.length; index++){
        if(id == productos[index].id){
            return productos[index]
        } else {
            return "El usuario no existe en la base de datos"
        }
    }
}