const { StatusCodes } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const Order = require('./orders.model');

const ordersService = require('./orders.service');
const catchErrors = require('../../common/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const orders = await ordersService.getAll();

    res.json(orders.map(Order.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { productsId } = req.params;
    const { id,  } = req.body;

    const order = await ordersService.createOrder({
      id,
      orderNumber, 
      number, 
      clientId, 
      productsId,
    });

    if (order) {
      res.status(StatusCodes.CREATED).json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const order = await ordersService.getById(id);

    if (order) {
      res.json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id, productsId } = req.params;
    const { orderNumber, number, clientId } = req.body;

    const order = await ordersService.updateById({
      id,
      orderNumber, 
      number, 
      clientId, 
      productsId,
    });

    if (order) {
      res.status(StatusCodes.OK).json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }
  })
);
router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const order = await ordersService.deleteById(id);

    if (order) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'ORDER_DELETED', msg: 'The order has been deleted' });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }
  })
);

module.exports = router;