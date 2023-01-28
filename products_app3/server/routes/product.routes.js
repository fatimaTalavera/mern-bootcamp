const ProductController = require("../controllers/product.controller");
const { authenticate } = require('../config/jwt.config')

module.exports = app => {
  app.get("/api/products/", authenticate, ProductController.findAllProducts);
  app.get("/api/products/:id", authenticate, ProductController.findOneSingleProduct);
  app.put("/api/products/update/:id", authenticate, ProductController.updateExistingProduct);
  app.post("/api/products/new", authenticate, ProductController.createNewProduct);
  app.delete("/api/products/delete/:id", authenticate, ProductController.deleteAnExistingProduct);
};