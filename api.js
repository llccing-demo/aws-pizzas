const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')

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

api.post('/orders', (request) => createOrder(request.body), { success: 201, error: 400 })

module.exports = api
