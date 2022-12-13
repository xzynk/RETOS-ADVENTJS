/* 
¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!
Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles.
Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays...
y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta.
También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta,
detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo... 
*/

function checkSledJump(heights) {
  //Obtenemos el maximo valor con su indice
  const maxHeigths = Math.max(...heights)
  const maxHeigthsIndex = heights.indexOf(maxHeigths)

  //Guardamos el largo del array
  const heightLength = heights.length

  //Si el maximo valor se encuentra en el ultimo indice entonces se retorna false
  if (maxHeigthsIndex === heightLength - 1) return false

  //Creamos una variable para controlar si estamos ascendiendo o descendiendo
  let isDescending = false

  //Recorremos el array
  for (let i = 0; i < heightLength - 1; i++) {
    const currentValue = heights[i]

    //Si el valor alcanzado es igual al mayor valor entonces estaremos descendiendo
    if (currentValue === maxHeigths) isDescending = true

    //Si no estamos bajando entonces los valores tienen que ir subiendo
    if (isDescending === false && currentValue >= heights[i + 1]) return false
    //Si estamos bajando entonces los valores tienen que ir bajando
    if (isDescending === true && heights[i] <= heights[i + 1]) return false
  }

  //Nada de lo anterior se cumplio, retornamos true
  return true
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
