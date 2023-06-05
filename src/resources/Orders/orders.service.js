const OrderRepository = require('./orders.memory.repository');
const productRepository = require('../products/product.memory.repository');

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
const deleteById = async (id) => {
  const boardDeletable = await getById(id);
  OrderRepository.deleteById(id);
  productRepository.deleteByProductId(id);

  return boardDeletable;
};
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
