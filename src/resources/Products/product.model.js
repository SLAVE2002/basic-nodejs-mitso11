const { v4: uuid } = require('uuid');

class Product {
  constructor({ 
    id = uuid(),
    name = 'cola',
    price = 0,
    ageOflssue= null,
    lifeTime = null,
  } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ageOflssue = ageOflssue;
    this.lifeTime = lifeTime;
  }

  static toResponse(product) {
    const { id, name, price, ageOflssue, lifeTime } = product;
    return { id, name, price, ageOflssue, lifeTime };
  }
}

module.exports = Product;
