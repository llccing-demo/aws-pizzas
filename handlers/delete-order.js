function deleteOrder(id) {
  if (!id) {
    throw new Error('删除订单需要 id 呀')
  }

  return {}
}

module.exports = deleteOrder
