const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function createOrder(request) {
  if (!request || !request.pizzaId || !request.address) {
    throw new Error('订购 pizza 需要提供地址和口味，这样你才能收到 pizza 啊')
  }

  return docClient
    .put({
      TableName: 'pizza-orders',
      Item: {
        orderId: 'some-id',
        pizza: request.pizza,
        address: request.address,
        orderStatus: 'pending',
      },
    })
    .promise()
    .then((res) => {
      console.log('订单已保存', res)
      return res
    })
    .catch((saveError) => {
      console.log('发生错误了', saveError)
      throw saveError
    })
}

module.exports = createOrder
