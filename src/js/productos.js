export let producto = {
    id: prompt("Ingrese el id: "),
    nombre: prompt("Ingrese el nombre: "),
    peso: 10,
    stock: 5,
    precio: 7000,
    descripcion: "Marcador de color negro",
    caracteristicas: {
        color: "negro",
        material: "plástico"
    }
}

export let objetos = [producto, {
    id: 2,
    nombre: "Lapiz",
    peso: 5,
    stock: 10,
    precio: 5000,
    descripcion: "Lapiz de color azul",
    caracteristicas: {
        color: "azul",
        material: "plástico"
    }
}]
