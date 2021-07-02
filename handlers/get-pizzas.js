const pizzas = require('../data/pizzas.json')

function getPizzas(pizzaId) {
  if (!pizzaId) {
    return pizzas
  }

  const pizza = pizzas.find((pizza) => pizza.id === pizzaId)

  if (pizza) {
    return pizza
  }

  throw new Error('没有你要找的 pizza 啊啊啊')
}

module.exports = getPizzas
