
// function unaFuncion(){
// }
// let numeros = [1,'jaime',true,unaFuncion,5,6]
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])
// console.log(numeros[5])
// function unaFuncion(){
//     console.log('Esto es una funcion')
// }
// let numeros = [1,5,'caso',unaFuncion,2,8,9,true,20,4,5,false]
// if(numeros[0] == 1){
//     console.log('Numeros iguales')
// }
// numeros[3]()
// switch (numeros[2]) {
//     case 9:
//         break;
//     case 'caso':
//         console.log('Esta es la posición 2')
//         break; 
//     default:
//         break;
// }
// console.log(unaFuncion)
// unaFuncion()

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let index = 0; index < 9; index++) {
//     if (numeros[index] % 2 == 0) {
//         console.log('El número: ' + numeros[index] + ' es un número par')
//     }
// }

// let estudiantes = ['Lina', 'Paola', 'Carol', 'Emmanuel', 'David', 'Mateo']
// let estudiante = prompt('Ingrese el nombre del estudiante: ')
// for (let index = 0; index < 6; index++) {
//     if (estudiante == estudiantes[index]) {
//         console.log('El estudiante ' + estudiante + ' existe en la base de datos')
//     }
// }

// let personas = ['Camila', 'Luisa', 'Felipe', 'Ana', 'Tomas', 'Andrea']
// let edades = [17, 22, 35, 15, 23, 18]
// for (let index = 0; index < 6; index++) {
//     if (edades[index] >= 18) {
//         console.log('La persona ' + personas[index] + ' tiene ' + edades[index] + ' años')
//     }
// }

// let personas = []
// let edades = []
// for (let index = 0; index < 5; index++) {
//     let persona = prompt('Ingrese el nombre de la persona: ')
//     let edad = prompt('Ingrese la edad de la persona: ')
//     personas[index] = persona
//     edades[index] = edad
// }
// for (let index = 0; index < 5; index++) {
//     if (edades[index] >= 18) {
//         console.log('La persona ' + personas[index] + ' tiene ' + edades[index] + ' años')
//     }
// }

// let nombres = ['Andrea']
// console.log(nombres)
// nombres.push('Jaime')
// nombres.push('Luisa')
// nombres.push('Camila')
// console.log(nombres)
// nombres.unshift('Camilo')
// nombres.unshift('Karen')
// console.log(nombres)
// nombres.pop()
// nombres.pop()
// console.log(nombres)
// nombres.shift()
// console.log(nombres)

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numeros.splice(0,2)
// console.log(numeros)
// numeros.splice(3, 1)
// console.log(numeros)

/* Desarrollar un algoritmo que pida el ingreso de la información de un empleado: nombre, documento, telefono, edad, area: (TI, Recursos humanos, salud y seguridad, bienestar, operativos) y salario
En total son 20 empleados
El salario se debe calcular con un valor hora y una cantidad de horas
Mostrar toda la información de los empleados que tienen un salario mayor a 2000000 y que estan en el area de recursos humanos o de TI */


// for (let index = 0; index < 3; index++) {
//     let estudiante = prompt('Ingrese el nombre del Estudiante: ')
//     console.log(estudiante)
//     let repetir = true
//     while (repetir) {
//         let opcion = ('Desa ingresar otra nota\n1 - Si\n2 - No ')
//         if (opcion == '2') {
//             repetir = false
//         }
//     }

// }


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// let numerosPares = numeros.map(function (numero) {
//     return numero * 4
//     // if (numero % 2 == 0) {
//     //     return numero
//     // }
// })
// console.log(numerosPares)
// console.log(numeros)
// numeros.map((numero) => {
//     console.log(numero)
// })

// let nombres = ['Ana', 'Camila', 'Andrea', 'Felipe']
// let nombresCompletos = nombres.map((nombre) => {
//     return nombre + ' Zapata'
// })
// console.log(nombresCompletos)

// let nombres = ['Luisa', 'Camila', 'Ana', 'Luisa', 'Miguel', 'Adriana', 'Andrea', 'Felipe', 'Camilo', 'Ana']
// let nombresNuevos = nombres.filter((nombre) => {
//     if (nombre == 'Ana') {
//         return nombre
//     }
// })
// console.log(nombresNuevos)


// let nombres = ['Luisa', 'Camila', 'Ana', 'Luisa', 'Miguel', 'Adriana', 'Andrea', 'Felipe', 'Camilo', 'Ana']
// let nuevoNombre = nombres.find((nombre) => {
//     if (nombre == 'Ana') {
//         return nombre
//     }
// })
// console.log(nuevoNombre)