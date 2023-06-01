const Product = require('./product.model');
const Products= [new Product()];
const getAll = async () => Products;
const getById = async (id) => Products.find((Products) => Products.id === id);
const createProduct = async ({
  id, 
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) => {
  const product = new Product({
    id, 
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  });
  Products.push(product);
  return product;
};

const deleteById = async (id) => {
  const productPosition = Products.findIndex((product) => product.id === id);

  if (productPosition === -1) return null;

  const productDeletable = Produtcs[productPosition];

  Products.splice(productPosition, 1);
  return productDeletable;
};

const updateById = async ({
  id, 
  name, 
  price, 
  ageOflssue, 
  lifeTime,
}) => {
  const productPosition = Product.findIndex((product) => product.id === id);

  if (productPosition === -1) return null;

  const oldProduct = Products[productPosition];
  const newProduct = {
    ...oldProduct,
    name, 
    price, 
    ageOflssue, 
    lifeTime,
  };

  Products.splice(productPosition, 1, newProduct);
  return newProduct;
};


module.exports = {
  Products,
  getAll,
  getById,
  createProduct,
  deleteById,
  updateById,
};