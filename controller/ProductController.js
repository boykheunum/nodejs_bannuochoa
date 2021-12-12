const Products = require('../model/ProductModel')
const CONTANTS = require('../database/contains');

exports.getProduct = (req, res) => {
    Products.getProduct((err, data) => {
      if (err) {
        res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
          message: err.message || "Some error occurred while retrieving...",
        });
      } else {
        res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
      }
    });
  };
  
  exports.getProductById = (req, res) => {
    Products.searchProductById(req.params.id, (err, data) => {
      if (err) {
        res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
          message: err.message || "Some error occurred while retrieving...",
        });
      } else {
        res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
      }
    });
  };
  
  exports.deleteProduct = (req, res) => {
    Products.deleteProduct(req.params.id, (err, data) => {
      if (err) {
        if (err.msg == CONTANTS.MESSAGE_ERROR.NOT_FOUND) {
          res
            .status(CONTANTS.STATUS_CODE.FAIL)
            .send({ message: CONTANTS.MESSAGE_ERROR.NOT_FOUND });
        } else {
          res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
            message: "Could not delete product",
          });
        }
      } else {
        res
          .status(CONTANTS.STATUS_CODE.SUCCESS)
          .send({ message: "Product was deleted successfully!" });
      }
    });
  };
  
  exports.addProduct = (req, res) => {
    if (!req.body) {
      res
        .status(CONTANTS.STATUS_CODE.FAIL)
        .send({ message: "Body data can not empty" });
    } else {
      const newProduct = new Product({
        category_id: req.body.category_id,
        name: req.body.name,
        price: req.body.price,
        importprice: req.body.importprice,
        image: req.body.image,
        description: req.body.description,
        quantity: req.body.quantity,

      });
      Products.addProduct(newProduct, (err, data) => {
        if (err) {
          res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
            message: err.message || "Some error occurred while creating",
          });
        } else {
          res
            .status(CONTANTS.STATUS_CODE.SUCCESS)
            .send({ message: "Product was added successfully!" });
        }
      });
    }
  };
  
  exports.updateProduct = (req, res) => {
    if (!req.body) {
      res
        .status(CONTANTS.STATUS_CODE.FAIL)
        .send({ message: "Body data can not empty" });
    } else {
      const productId = req.params.id;
      Products.deleteProduct(productId, req.body, (err, data) => {
        if (err) {
          res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
            message: err.message || "Some error occurred while updating",
          });
        } else {
          res
            .status(CONTANTS.STATUS_CODE.SUCCESS)
            .send({ message: "Product was updated successfully!" });
        }
      });
    }
  };