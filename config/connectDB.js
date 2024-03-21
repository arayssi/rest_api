const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://mongoose:123@cluster0.qkprowb.mongodb.net/Contact")
    .then(() => console.log("connect succ"))
    .catch((err) => console.log(err));
};
module.exports = connect;
