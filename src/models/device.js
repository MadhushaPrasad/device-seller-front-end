export default class Device {
  constructor(id, name, description, price, createTime, deviceType) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.createTime = createTime
    this.deviceType = deviceType
  }
}
