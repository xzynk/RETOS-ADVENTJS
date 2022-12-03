function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  const splitText = letter.split(" ")
  const containLetter = (str) => /[a-z]/i.test(str)
  const isClosed = (element) => {
    const length = element.length - 1

    if (element[0] === "[" || element[0] === "{" || element[0] === ")") return false
    if (element[0] === "(" && element[length] !== ")") return false
    if (element[0] === "(" && element[length] === ")") {
      if (!containLetter(element)) return false
      for (let i = 1; i < length; i++) {
        if (element[i] === ")") return false
        if (element[i] === "(") return false
      }
      console.log(element, true)
      return true
    }
    console.log(element, true)
    return true
  }

  return splitText.every(isClosed)
}

const carta = ")bici( casa play"

isValid(carta)
