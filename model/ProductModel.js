const sql = require('../database/connectionDB');

const Products = function (product) {
    this.product_id = product.product_id;
    this.category_id = product.category_id;
    this.name = product.name;
    this.price = product.price;
    this.importprice = product.importprice;
    this.image = product.image;
    this.description = product.description;
    this.quantity = product.quantity;
}

Products.getProduct = result => {
    sql.query("SELECT * FROM products",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Products.addProduct = function (product) {
    sql.query("INSERT INTO products(name, image, price, importprice, quantity, description, category_id) VALUES (?,?,?,?,?,?,?)", [product.name, product.image, product.price, product.importprice, product.quantity, product.description, product.category_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Products.deleteProduct = function (product_id) {
    sql.query("DELETE FROM products WHERE product_id = ?", [product_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Products.deleteProductByCategory = function (categoryproduct_id) {
    sql.query("DELETE FROM products WHERE category_id = ?", [categoryproduct_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Products.updateProduct = function (product_id, product) {
    sql.query("UPDATE products SET name= ?, image= ?, price= ?, importprice= ?, quantity= ?, descriotion= ?, id_type_product= ? WHERE product_id= ?", [product.name, product.image, product.price, product.importprice, product.quantity, product.description, product.category_id, product_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Products.searchProductByName = function (name) {
    sql.query("SELECT * FROM products WHERE name = ?", name,
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    )
}