const sql = require('../database/connectionDB');

const Receipts = function (receipt){
    this.receipt_id = receipt.id;
    this.date = receipt.date;
    this.cash = receipt.cash;
    this.user_id = receipt.user_id;
}

Receipts.getReceipt = result => {
    sql.query("SELECT * FROM receipts",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Receipts.addProduct = function (receipt) {
    sql.query("INSERT INTO receipts(date, cash, user_id) VALUES (?,?,?)", [receipt.date, receipt.cash, receipt.user_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Receipts.deleteShop = function (receipt_id) {
    sql.query("DELETE FROM receipts WHERE receipt_id = ?", [receipt_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Receipts.updateProduct = function (receipt_id, receipt) {
    sql.query("UPDATE receipts SET date= ?, cash= ?, user_id= ?", [receipt.date, receipt.cash, receipt.user_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Receipts.searchProductByReceiptId = function (user_id) {
    sql.query("SELECT * FROM receipts WHERE user_id = ?", user_id,
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    )
}

module.exports = Receipts;