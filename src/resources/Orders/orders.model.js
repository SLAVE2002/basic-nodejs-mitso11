import { v4 as uuidv4 } from 'uuid';

class order {
  constructor({ id = uuidv4(), ordernumber = 'ordernumber', numbers = 'numbers', clientid = 'clientid', productid = '2344467' } = {}) {
    this.id = id;
    this.ordernumber = ordernumber;
    this.numbers = numbers;
    this.clientid = clientid;
    this.productid = productid;
  }

  static toResponse(order) {
    const { id, ordernumber, numbers, clientid, productid} = order;
    return { id, ordernumber, numbers, clientid, productid};
  }
}

export default order;