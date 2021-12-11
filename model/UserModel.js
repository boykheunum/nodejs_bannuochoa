const sql = require('../database/connectionDB');

const Users = function (user) {
    this.user_id = user.user_id;
    this.name = user.name;
    this.username = user.username;
    this.password = user.password;
    this.phonenumber = user.phonenumber;
    this.sex = user.sex;
    this.email = user.email;
}

Users.getUsers = result => {
    sql.query("SELECT * FROM users",
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}
Users.addUsers = function (user) {
    sql.query("INSERT INTO products(name, username, password, phonenumber, sex, email) VALUES (?,?,?,?,?,?,?)", [user.name, user.username, user.password, user.phonenumber, user.sex, user.email],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Users.deleteUsers = function (user_id) {
    sql.query("DELETE FROM users WHERE user_id = ?", [user_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Users.updateUsers = function (user, user_id) {
    sql.query("UPDATE Users SET name= ?, username= ?, password= ?, phonenumber= ?, sex= ?, email= ? WHERE user_id= ?", [user.name, user.username, user.password, user.phonenumber, user.sex, user.email, user_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}

Users.searchUserById = function (user_id) {
    sql.query("SELECT * FROM users WHERE user_id= ?", [user_id],
        (err, res) => {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    );
}