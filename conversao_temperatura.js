/* Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * (5/9)

F = C * (9/5) + 32

*/

function convertTemperature (degree){
  const isCelsius = degree.toUpperCase().includes('C')
  const isFahrenheit = degree.toUpperCase().includes('F')

  if(!isCelsius && !isFahrenheit) {
    throw new Error('Grau de temperatura não identificado')
  }

  // F -> C
  let updatedDegree = Number(degree.toUpperCase().replace('F',''));
  let formula = fahrenheit => (fahrenheit - 32) * (5/9)
  let degreeSign = 'C'

  // C -> F
  if(isCelsius) {
    updatedDegree = Number(degree.toUpperCase().replace('C',''));
    formula = celsius => celsius * (9/5) + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(convertTemperature('50F'))
  console.log(convertTemperature('10C'))
  convertTemperature('50Z')
} catch (error) {
  console.log(error.message)
}