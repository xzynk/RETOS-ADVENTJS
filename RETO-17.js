/* 
Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚.
Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día.
Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas
que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

El array contiene otros arrays que contienen los datos de cada transportista
transportista[0] -> Nombre/ID del Transportista
transportista[1] -> Paquetes que gestiona en un día
transportista[2] -> Array con sus subordinados

Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado:

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
¡Ten cuidado! Como has visto en el segundo ejemplo, el organigrama puede tener diferentes niveles y además nos viene información que puede ser que no necesitemos. Debemos tener en cuenta el parámetro de carrierID para calcular bien el número y contar todo su equipo.
*/

function countPackages(carriers, carrierID) {
  let carrierDict = {}

  //Guardamos la informacion en un diccionario
  for (let trans of carriers) {
    carrierDict[trans[0]] = {
      capacity: trans[1],
      subcarriers: trans[2],
    }
  }

  //Guardamos la informacion de los ayudantes
  const subTransport = []
  let capacity = 0

  //Añadimos el usuario actual a la fila
  subTransport.push(carrierID)

  /* for (let transport of carriers) {
    if (transport[0] === carrierID) {
      if (transport[2].length !== 0) {
        for (let subordinado of transport[2]) {
          capacity += countPackages(carriers, subordinado)
        }
      }
      capacity += transport[1]
    }
  } */
  return carrierDict
}

/* Este código parece ser una función recursiva que cuenta el número total de paquetes en un conjunto de transportistas, dado un identificador de transportista específico. Aquí hay algunas sugerencias para mejorar el código:

En lugar de recorrer la lista de transportistas en cada iteración de la función, podría guardar la información sobre el transportista en un diccionario para poder acceder a ella más rápidamente. Esto haría que la función sea más rápida, ya que no tendría que recorrer la lista completa en cada iteración.

En lugar de recorrer el arreglo de identificadores de transportistas secundarios en cada iteración, podría usar una cola para almacenarlos y recorrerlos de manera más eficiente. Esto también mejoraría el rendimiento de la función.

Podría utilizar una variable de contador en lugar de acumular la capacidad en cada iteración. Esto haría que el código sea más claro y más fácil de entender.

Podría utilizar una función auxiliar para recorrer el arreglo de transportistas secundarios, en lugar de hacerlo dentro del cuerpo principal de la función. Esto haría que el código sea más limpio y más fácil de leer.

Aquí hay una posible implementación de la función con estas sugerencias aplicadas: */
const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
]

countPackages(carriers2, 'camila') // 15
