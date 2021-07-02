const pizzas = require('../data/pizzas.json')

function deletePizza(pizzaId) {
  if (!pizzaId) {
    return pizzas
  }

  const pizzaIdx = pizzas.findIndex((pizza) => pizza.id == pizzaId)

  if (pizzaIdx > -1) {
    pizzas.splice(pizzaIdx, 1)
    return pizzas
  }
  throw new Error('没有你要更新的 pizza 啊啊啊')
}

module.exports = deletePizza
