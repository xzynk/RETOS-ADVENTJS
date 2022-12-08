/*
Mi amigo Dani est� trabajando en una tienda y con la llegada de las navidades tiene el almac�n hecho un desastre y no encuentra nada.
Vamos a crear una funci�n contains que recibe dos par�metros: un objeto que define el almac�n y el producto que buscamos.
La funci�n debe devolver un booleano que indique si se encuentra el string como valor en alg�n nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- �Est� aqu�!
    }
  }
}

contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

contains(otroAlmacen, 'gameboy') // false

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.
Lo importante es buscar que el producto est� en los almacenes.
*/

function contains(store, product) {
  const iterate = (obj) => {
    for (let value of Object.values(obj)) {
      if (value === product) {
        return true
      }

      if (value instanceof Object) {
        if (iterate(value)) {
          return true
        }
      }
    }

    return false
  }

  return iterate(store)

}