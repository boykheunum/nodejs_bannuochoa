const sql = require('../database/connectionDB');

const Categorys = function (category) {
    this.category_id = category.category_id;
    this.name = category.name;
}

Categorys.getAll = result => {
    sql.query("SELECT * FROM categorys",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Categorys.addCategory = function (category) {
    sql.query("INSERT INTO categorys(name) VALUES (?)", [category.name],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Categorys.deleteCategory = function (category_id) {
    sql.query("DELETE FROM categorys WHERE category_id = ?", [category_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Categorys.updateCategory = function (category, category_id) {
    sql.query("UPDATE categorys SET name= ? WHERE id_product= ?", [category.name, category_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}