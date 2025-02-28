export default class Purchase {
  constructor(id, userId, deviceId, price, color, purchaseTime) {
    this.id = id
    this.userId = userId
    this.deviceId = deviceId
    this.price = price
    this.color = color
    this.purchaseTime = purchaseTime
  }
}
