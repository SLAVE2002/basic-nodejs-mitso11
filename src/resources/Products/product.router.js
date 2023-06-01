const { StatusCodes } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const Product = require('./product.model');

const ProductsService = require('./product.service');
const catchErrors = require('../../common/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const Products = await ProductsService.getAll();

    res.json(Products.map(Product.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id,  } = req.body;

    const product = await ProductsService.createProduct({
      id,

    });

    if (product) {
      res.status(StatusCodes.CREATED).json(Product.toResponse(product));
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

    const product = await ProductsService.getById(id);

    if (product) {
      res.json(Product.toResponse(product));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }
  })
);
router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const {  } = req.body;

    const product = await ProductsService.updateById({
      id,

    });

    if (product) {
      res.status(StatusCodes.OK).json(Product.toResponse(product));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const product = await ProductsService.deleteById(id);

    if (product) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'PRODUCT_DELETED', msg: 'The product has been deleted' });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }
  })
);

module.exports = router;