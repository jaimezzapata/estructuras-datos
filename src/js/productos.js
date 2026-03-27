import { productos } from "./models.js"

export function listarProductos(){
    for(let index = 0; index < 2; index++){
        console.log(productos[index])
    }
}