/* ¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol,
que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados,
usamos el guión bajo _ para los espacios.
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
*/

function createXmasTree(height) {
  // Condicionales
  if (height > 100) height = 100
  // Separadores
  const ancho = height * 2 - 1
  const separador = '_'
  const tronco = '#'
  const altoTronco = 2
  const sbl = '*'

  function generarArbol(sbl, sep) {
    let texto = ''
    let cantidad = 1

    for (let n = 0; n < height; n++) {
      let start = (ancho - cantidad) / 2
      let end = ancho - start

      for (let i = 0; i <= ancho - 1; i++) {
        if (i >= start && i < end) {
          texto += sbl
        } else {
          texto += sep
        }
      }

      texto += '\n'
      cantidad += 2
    }

    return texto
  }

  function generarTronco(simbolo, separador, altura) {
    let base = ''
    let centro = (ancho - 1) / 2

    for (let n = 0; n < altura; n++) {
      for (let i = 0; i <= ancho - 1; i++) {
        if (i === centro) {
          base += simbolo
        } else {
          base += separador
        }
      }

      base += '\n'
    }

    return base.trim()
  }

  return (
    generarArbol(sbl, separador) + generarTronco(tronco, separador, altoTronco)
  )
}

createXmasTree(5)
