/* 
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
canReconfigure(from, to) // true
la transformación sería así:
B -> L
A -> I
L -> B


const from = 'CON'
const to   = 'JUU'
canReconfigure(from, to) // false
no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO


const from = 'XBOX'
const to   = 'XXBO'
canReconfigure(from, to) // false
no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)


const from = 'XBOX'
const to   = 'XOBX'
canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
canReconfigure(from, to) // false
no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud */

function canReconfigure(from, to) {
  // Verificar si el tamaño de los strings es igual
  if (from.length !== to.length) return false

  // Mapeamos las letras
  const mapping = {}

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i]
    const toChar = to[i]

    if (
      Object.values(mapping).some((value) => value === toChar) &&
      mapping[fromChar] !== toChar
    )
      return false

    if (mapping[fromChar] && mapping[fromChar] !== toChar) return false

    mapping[fromChar] = toChar
  }

  return true
}

canReconfigure('BAL', 'LIB') // true
canReconfigure('CON', 'JUU') // false
canReconfigure('MMM', 'MID') // false
canReconfigure('AA', 'MID') // false
canReconfigure('MID', 'AA') // false
canReconfigure('XBOX', 'XXOB') // false
canReconfigure('XBOX', 'XOBX') // true
canReconfigure('xxxMMM', 'aaaDDD') // true
canReconfigure('aaaDDDmmm', 'aaaDDDmmm') // true
canReconfigure('xxxqqqeeefffggg', 'xxxqqqeeefffgg') // false
canReconfigure('abcdefghijkl', 'lkjihgfedcba') // true
