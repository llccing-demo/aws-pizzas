const Api = require('claudia-api-builder')
const api = new Api()

api.get('/pizzas', () => {
  return ['pizzas 1', 'pizzas 2', 'pizzas 3', 'pizzas 4']
})

module.exports = api
