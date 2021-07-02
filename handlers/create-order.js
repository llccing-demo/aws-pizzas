function createOrder(order) {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error('订购 pizza 需要提供地址和口味，这样你才能收到 pizza 啊')
    return {}
  }
}

module.exports = createOrder
