import { usuarios } from "./models.js";
export function listarUsuarios() {
    for (let index = 0; index < usuarios.length; index++) {
        console.log(usuarios[index])
    }
}

export function buscarUsuario(){
    let documento = prompt("Ingrese el documento de identidad del usuario a Buscar: ")
    for(let index = 0; index < usuarios.length; index++){
        if(documento == usuarios[index].identificacion){
            return usuarios[index]
        } else {
            return "El producto no existe en la base de datos"
        }
    }
}