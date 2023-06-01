const prosuctRepository = require('./product.memory.repository');

const getAll = () => prosuctRepository.getAll();
const getById = (id) => prosuctRepository.getById(id);
const createTask = ({
  id,
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) =>
prosuctRepository.createTask({
    id,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });
const deleteById = (id) => prosuctRepository.deleteById(id);
const updateById = ({
  id,
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) =>
prosuctRepository.updateById({
    id,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });

module.exports = { getAll, getById, createTask, deleteById, updateById };