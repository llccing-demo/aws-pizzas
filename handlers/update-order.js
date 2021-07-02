function updateOrder(id, updates) {
  if (!id || !updates) {
    throw new Error('更新订单需要订单 id 和 更新的内容主体')
  }
  return {
    message: `订单 ${id} 已经成功更新了`,
  }
}

module.exports = updateOrder
