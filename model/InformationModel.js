const sql = require('../database/connectionDB');

const Informationshop = function (informationshop) {
    this.shop_id = informationshop.shop_id;
    this.lat = informationshop.lat;
    this.lng = informationshop.lng;
    this.address = informationshop.adress;
    this.phone = informationshop.phone;
    this.email = informationshop.email;
    this.name = informationshop.name;
}

Informationshop.getShop = result => {
    sql.query("SELECT * FROM informationshop",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Informationshop.addShop = function (informationshop) {
    sql.query("INSERT INTO infomationshop(adress, name, phone, lat, lng) VALUES(?,?,?,?,?)", [informationshop.adress, informationshop.name, informationshop.phone, informationshop.lat, informationshop.lng],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Informationshop.deleteShop = function (shop_id) {
    sql.query("DELETE FROM informationshop WHERE shop_id = ?", [shop_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Informationshop.updateShop = function (shop_id, informationshop) {
    sql.query("UPDATE informationshop SET adress= ?, name= ?, phone= ?, lat= ?, lng= ? WHERE shop_id= ?",[informationshop.adress, informationshop.name, informationshop.phone, informationshop.lat, informationshop.lng],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Informationshop.searchProductByShopId = function (shop_id) {
    sql.query("SELECT * FROM informationshop WHERE shop_id = ?", shop_id,
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    )
}

module.exports = Informationshop;