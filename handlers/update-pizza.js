const pizzas = require('../data/pizzas.json')

function updatePizza(pizzaId, newPizza) {
  if (pizzaId) {
    throw new Error('pizzaId 不能为空')
  }

  const pizzaIdx = pizzas.findIndex((pizza) => pizza.id == pizzaId)
  if (pizzaIdx > -1) {
    pizzas[pizzaIdx] = newPizza
    return pizzas
  }

  throw new Error('没有你要更新的 pizza 啊啊啊')
}

module.exports = updatePizza
