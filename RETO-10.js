/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo
número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función
nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer
las monedas que tienes disponible para crear el array con la devolución,
ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.
*/

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  const counts = {}
  coins.forEach(coins => counts[coins] = 0)

  function calculateCoins(remainChange) {
    if (remainChange === 0) {
      return
    }

    const value = search(coins, remainChange)
    counts[value]++
    const newChange = remainChange - value

    calculateCoins(newChange)
  }

  calculateCoins(change)

  return Object.values(counts)
}

function search(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle

  // Realiza una búsqueda binaria en el array
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] === value) {
      return value;
    }
    if (value < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  // Si no se encuentra el valor buscado, devuelve el valor más cercano
  if (right < 0) {
    return array[0];
  }
  if (left >= array.length) {
    return array[array.length - 1];
  }
  if (value <= array[left - 1]) {
    return array[left - 1];
  }
  if (value >= array[right]) {
    return array[right];
  }
  return array[middle];
}