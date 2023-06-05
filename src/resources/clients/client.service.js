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

