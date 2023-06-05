const productRepository = require('./product.memory.repository');

const getAll = () => productRepository.getAll();
const getById = (id) => productRepository.getById(id);
const createTask = ({
  id,
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) =>
productRepository.createTask({
    id,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });
const deleteById = (id) => productRepository.deleteById(id);
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

module.exports = { getAll, getById, createTask, deleteById, updateById };
