const productRepository = require('./product.memory.repository');
const OrderRepository = require('../Orders/orders.memory.repository');

const getAll = () => productRepository.getAll();
const getById = (id) => productRepository.getById(id);
const createProduct = ({
  id,
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) =>
productRepository.createProduct({
    id,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });
const deleteById = async (id) => {
  const productDeletable = await getById(id);
  productRepository.deleteById(id);
  OrderRepository.deleteByProductId(id);
return productDeletable;
}

const updateById = ({
  id,
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) =>
productRepository.updateById({
    id,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });

module.exports = { getAll, getById, createProduct, deleteById, updateById };