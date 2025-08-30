const readline = require('readline')

// Crear la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin, // lee del teclado
  output: process.stdout, // escribe en consola
})

console.log('Menu contactos.')
console.log('1. Listar contactos.')
console.log('2. Crear contacto.')
console.log('3. Ver contacto.')
console.log('4. Actualizar contacto.')
console.log('5. Eliminar contacto.')
console.log('0. Salir.')

rl.question('Introduce la opcion que deseas ejecutar: ', (respuesta) => {
  let opcion = parseInt(respuesta)

  switch (opcion) {
    case 1:
      console.log('1. Listar contactos.')
      break
    case 2:
      console.log('2. Crear contacto.')
      break
    case 3:
      console.log('3. Ver contacto.')
      break
    case 4:
      console.log('4. Actualizar contacto.')
      break
    case 5:
      console.log('5. Eliminar contacto.')
      break
    case 0:
      console.log('0. Salir')
      break
    default:
      console.log('Opción inválida')
  }

  rl.close() // cerrar la interfaz al terminar
})
