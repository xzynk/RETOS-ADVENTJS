/* Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido,
está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo.
Por eso, el ratón, que se ha visto los vídeos de midudev,
va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left,
right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones
y que cada una puede tener dimensiones diferentes! */

function canMouseEat(direction, game) {
  const MOUSE = 'm'
  const FOOD = '*'

  //Buscamos al raton para saber en que array y en que indice se encuentra
  const mouseIndex = (gameArray) => {
    const index = gameArray.findIndex((element) => element.includes(MOUSE))
    if (index === -1) return false
    return { x: index, y: gameArray[index].indexOf(MOUSE) }
  }

  const mouseIndexPosition = mouseIndex(game)
  const checkFood = (mouseObj) => {
    //Modificamos el array segun la direccion
    switch (direction) {
      case 'up':
        mouseObj.x -= 1
        break
      case 'down':
        mouseObj.x += 1
        break
      case 'left':
        mouseObj.y -= 1
        break
      default:
        mouseObj.y += 1
        break
    }

    // Estamos intentando buscar la comida en una posicion inexistente?
    if (mouseObj.x < 0 || mouseObj.y > game.length - 1) return false
    // Buscamos la comida si encontramos cualquier otra cosa entonces FALSE
    if (game[mouseObj.x][mouseObj.y] !== FOOD) return false
    // Si no retornamos TRUE
    return true
  }

  return checkFood(mouseIndexPosition)
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

canMouseEat('up', room) // false
canMouseEat('down', room) // true
canMouseEat('right', room) // false
canMouseEat('left', room) // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

canMouseEat('up', room2) // false
canMouseEat('down', room2) // false
canMouseEat('right', room2) // true
canMouseEat('left', room2) // false
