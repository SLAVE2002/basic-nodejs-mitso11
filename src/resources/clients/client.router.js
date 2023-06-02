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
const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const Client = require('./client.model');

const clientsService = require('./client.service');
const catchErrors = require('../../common/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const clients = await clientsService.getAll();

    res.json(clients.map(Client.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { name, adress, bonucecard, numberphone } = req.body;

    const client = await clientsService.createClient({ name, adress, bonucecard, numberphone });

    if (client) {
      res.status(StatusCodes.CREATED).json(Client.toResponse(client));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'CLIENT_NOT_CREATE', msg: 'Client not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const client = await clientsService.getById(id);

    if (client) {
      res.json(Client.toResponse(client));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CLIENT_NOT_FOUND', msg: 'Client not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { name, adress, bonucecard, numberphone } = req.body;

    const client = await clientsService.updateById({ name, adress, bonucecard, numberphone});

    if (client) {
      res.status(StatusCodes.OK).json(Client.toResponse(client));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CLIENT_NOT_FOUND', msg: 'Client not found' });
    }
  })
);
router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const client = await clientsService.deleteById(id);

    if (!client) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CLIENT_NOT_FOUND', msg: 'Client not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'CLIENT_DELETED', msg: 'The client has been deleted' });
  })
);

module.exports = router;
