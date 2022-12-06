/*
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los ex�menes finales. ¡Y toca un poco de matemáticas! 😱
A una funci�n se le pasan dos par�metros: un Array con n�meros y el resultado que se espera.
La funci�n debe devolver los dos valores del Array que sumen el resultado esperado.
Como a veces pueden haber m�s de dos valores que sumen, se devolver� el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que est� a la derecha.
Si no se encuentra, se devuelve null.
Veamos unos ejemplos:
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
El resultado tiene que ser un array con dos n�meros.
Una vez que tengas el resultado... �c�mo podr�as hacer que fuese lo m�s �ptimo posible para no tener que recorrer las mismas situaciones dos veces ??
*/

function sumPairs(numbers, result) {
  const hash = HashArray(numbers)
  let resultado = []

  for (let i = 0; i < numbers.length - 1; i++) {
    let numeroActual = numbers[i]
    let par = result - numeroActual
    let existNumber = hash.get(par)

    if (par === numeroActual && existNumber.rep === 1) continue

    if (existNumber) {
      resultado.push(numeroActual)
      resultado.push(existNumber.clave)
      return resultado
    }
  }

  return null
}

function HashArray(arr) {
  const hashArray = new HashTable(arr.length)

  for (let element in arr) {
    hashArray.set(arr[element])
  }

  return hashArray
}

function HashTable(numBuckets) {
  this.numBuckets = numBuckets
  this.table = []

  this.set = function (valor) {
    const clave = this.hash(valor)
    const tableKey = this.table[clave]
    let rep = 1

    if (tableKey === undefined) {
      this.table[clave] = {clave, rep}
    } else {
      rep += tableKey.rep
      this.table[clave] = {clave, rep}
    }

  }

  this.get = function (clave) {
    const hashKey = this.hash(clave)
    const tableKey = this.table[hashKey]

    if (tableKey === undefined) return null
    if (tableKey.clave === clave) return tableKey

  }

  this.hash = function (value) {
    return value
  }
}