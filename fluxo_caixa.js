/* Crie um objeto que possuiŕa 2 propriedades, ambas do tipo array: 
  * receitas: []
  * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo, seguido do valor do saldo 

*/

let family = {
  incomes: [2700.00, 350.30, 145.64],
  expenses: [80.56, 122.90, 47.52, 876.26]
}

function sum (array){
  let total = 0;

  for(let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const totalIncomes = sum(family.incomes)
  const totalExpenses = sum(family.expenses)
  const balance = totalIncomes - totalExpenses

  if(balance >= 0) {
    console.log(`Saldo positivo: R$ ${balance.toFixed(2)}.`)
  } else {
    console.log(`Saldo negativo: R$ ${balance.toFixed(2)}.`)
  }
}

calculateBalance()