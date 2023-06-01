const OrderRepository = require('./orders.memory.repository');

const getAll = () => OrderRepository.getAll();
const getById = (id) => OrderRepository.getById(id);
const createOrder = ({
  id,
  orderNumber, 
  number, 
  clientId, 
  productsId,
}) =>
OrderRepository.createOrder({
    id,
    orderNumber, 
    number, 
    clientId, 
    productsId,
  });
const deleteById = (id) => OrderRepository.deleteById(id);
const updateById = ({
  id,
  orderNumber, 
  number, 
  clientId, 
  productsId,
}) =>
OrderRepository.updateById({
    id,
    orderNumber, 
    number, 
    clientId, 
    productsId,
  });

module.exports = { getAll, getById, createOrder, deleteById, updateById };