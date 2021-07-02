const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const updatePizza = require('./handlers/update-pizza')
const deletePizza = require('./handlers/delete-pizza')

const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')

api.get('/', () => '欢迎来到 你的 pizza 店')

api.get('/pizzas', () => {
  return getPizzas()
})

api.get(
  '/pizzas/{id}',
  (request) => {
    return getPizzas(request.pathParams.id)
  },
  {
    error: 404,
  }
)

api.put('/pizzas/{id}', (request) => updatePizza(request.pathParams.id, request.body), {
  success: 201,
  error: 400,
})

api.delete('/pizzas/{id}', (request) => deletePizza(request.pathParams.id))

api.post('/orders', (request) => createOrder(request.body), { success: 201, error: 400 })
api.put('/orders/{id}', (request) => updateOrder(request.pathParams.id, request.body), {
  error: 400,
})
api.delete('/orders/{id}', (request) => deleteOrder(request.pathParams.id), { error: 400 })

module.exports = api
