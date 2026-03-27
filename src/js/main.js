import { listarProductos, buscarProducto } from './productos.js'
import { listarUsuarios, buscarUsuario } from './usuarios.js'

function menuOpciones() {
    let repetir = true
    while (repetir) {
        let opcion = prompt("Seleccione: \n1 - Productos\n2 - Usuarios\n3 - Buscar Usuario\n4 - Buscar producto\n5 - Salir")
        switch (opcion) {
            case "1":
                listarProductos()
                break;
            case "2":
                listarUsuarios()
                break;
            case "3":
                console.log(buscarUsuario())
                break;
            case "4":
                console.log(buscarProducto())
                break
            case "5":
                repetir = false
                break;
        }
    }
}
menuOpciones()
