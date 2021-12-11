const sql = require('../database/connectionDB');

const ReceiptDetails = function (receiptdetail) {
    this.receipt_id = receiptdetail.receipt_id;
    
    this.unitprice = receiptdetail.unitprice;
    this.product_id = receiptdetail.id_product;
    this.amount = receiptdetail.amount;
    this.totalprice = receiptdetail.totalprice;
    this.cash = receiptdetail.cash;
}

ReceiptDetails.getReceiptDetail = result => {
    sql.query("SELECT * FROM receiptdetails",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

ReceiptDetails.addReceiptDetail = function (receiptdetails) {
    sql.query("INSERT INTO receiptdetails(receipt_id, unitprice, product_id, amount, totalprice, cash) VALUES (?,?,?,?,?,?,?)", [receiptdetails.receipt_id, receiptdetails.unitprice, receiptdetails.product_id, receiptdetails.amount, receiptdetails.totalprice, receiptdetails.cash],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

ReceiptDetails.deleteReceiptDetail = function (receiptdetail_id) {
    sql.query("DELETE FROM receiptdetails WHERE receiptdetail_id = ?", [receiptdetail_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}


ReceiptDetails.searchProductByReceiptId = function (receiptdetail_id) {
    sql.query("SELECT * FROM receiptdetails WHERE receiptdetail_id = ?", receiptdetail_id,
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    )
}