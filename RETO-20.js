/* En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir
la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga
si realmente la cadena de texto que les llega tiene, efectivamente,
todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con
acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false */

function pangram(letter) {
  const arrayLetter = stringMod(letter)
  const letterCount = {}

  for (const letter of arrayLetter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1
  }

  for (const letter of 'abcdefghijklmnñopqrstuvwxyz') {
    if (letterCount[letter] === undefined) return false
  }

  return true
}

function stringMod(str) {
  str = str.trim()
  str = str.toLowerCase()

  str = str.replace(/[áéíóúäëïöü]/g, function (c) {
    return c === 'á' || c === 'ä'
      ? 'a'
      : c === 'é' || c === 'ë'
      ? 'e'
      : c === 'í' || c === 'ï'
      ? 'i'
      : c === 'ó' || c === 'ö'
      ? 'o'
      : c === 'ú' || c === 'ü'
      ? 'u'
      : ''
  })

  return str.replace(/\s/g, '').split('')
}
