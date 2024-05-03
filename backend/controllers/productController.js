import Product from "../models/productModel.js";

// @desc Fetch All Products
// @route GET /api/products

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};
// @desc Fetch a Product
// @route GET /api/products/:id

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};

export { getProducts, getProductById };
