const Order = require('./orders.model');

const Orders = [new order()];

const getAll = async () => Orders;

const getById = async (id) => Orders.find((order) => order.id === id);

const createOrder = async ({
  id,

}) => {
  const order = new Order({
    id,

  });
  Orders.push(order);
  return order;
};

const deleteById = async (id) => {
  const OrderPosition = Orders.findIndex((order) => order.id === id);

  if (OrderPosition === -1) return null;

  const orderDeletable = Orders[OrderPosition];

  Orders.splice(OrderPosition, 1);
  return orderDeletable;
};

const updateById = async ({
  id,

}) => {
  const OrderPosition = Orders.findIndex((order) => order.id === id);

  if (OrderPosition === -1) return null;

  const oldOrder = Orders[OrderPosition];
  const newOrder = {
    ...oldOrder,

  };

  Orders.splice(OrderPosition, 1, newOrder);
  return newOrder;
};

const removeClientById = async (id) => {
  const clientOrders = Orders.filter((order) => order.clientId === id);

  await Promise.allSettled(
    clientOrders.map(async (order) => updateById({ id: order.id, clientId: null }))
  );
};

const deleteByProductId = async (productsId) => {
  const productOrders = Orders.filter((order) => order.productsId === productsId);

  await Promise.allSettled(orderProducts.map(async (order) => deleteById(order.id)));
};

module.exports = {
  Orders,
  getAll,
  getById,
  createOrder,
  deleteById,
  updateById,
  removeClientById,
  deleteByProductId,
};