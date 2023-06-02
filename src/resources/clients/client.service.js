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
const ClientRepository = require('./client.memory.repository');
const OrderRepository = require('../Orders/orders.memory.repository');

const getAll = () => ClientRepository.getAll();
const getById = (id) => ClientRepository.getById(id);
const createClient = ({ name, adress, bonucecard, numberphone }) =>
ClientRepository.createClient({ name, adress, bonucecard, numberphone });
const deleteById = async (id) => {
  const clientDeletable = await getById(id);
  ClientRepository.deleteById(id);
  OrderRepository.removeClientById(id);

  return clientDeletable;
};
const updateById = ({ name, adress, bonucecard, numberphone }) =>
ClientRepository.updateById({ name, adress, bonucecard, numberphone });

module.exports = { getAll, getById, createClient, deleteById, updateById };