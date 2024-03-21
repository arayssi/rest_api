const mongoose = require("mongoose");

const ContactSChema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Contact = mongoose.model("contact", ContactSChema);

module.exports = Contact;
