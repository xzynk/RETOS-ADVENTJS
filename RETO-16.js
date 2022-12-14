/* Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico,
a 8 km al norte de Rovaniemi.
Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100

Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

decodeNumber('...') // 3
decodeNumber('.,') // 4 (5 - 1)
decodeNumber(',.') // 6 (5 + 1)
decodeNumber(',...') // 8 (5 + 3)
decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;') // 49 (50 - 1)
decodeNumber('..,') // 5 (-1 + 1 + 5)
decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!') // 49 (-1 -50 + 100)
decodeNumber('!!!') // 300
decodeNumber(';!') // 50
decodeNumber(';.W') // NaN */

function decodeNumber(symbols) {
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  let numbers = 0

  for (let i = 0; i < symbols.length; i++) {
    const value = values[symbols[i]]
    const nextValue = values[symbols[i + 1]]

    if (value === undefined) return NaN

    if (nextValue > value) {
      numbers -= value
    } else {
      numbers += value
    }
  }

  return numbers
}
