import { listarProductos } from './productos.js'

function menuOpciones() {
    let repetir = true
    while (repetir) {
        let opcion = prompt("Seleccione: \n1 - Productos\n2 - Usuarios\n3 - Salir")
        switch (opcion) {
            case "1":
                listarProductos()
                break;
            case "2":
                break;
            case "3":
                repetir = false
                break;
        }
    }
}
menuOpciones()
