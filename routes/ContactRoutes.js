const express = require("express");
const Contact = require("../models/contact");
const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    res.status(201).json({ msg: "contact created !", data: newContact });
  } catch (error) {
    res.status(500).json({ msg: "error server", error });
  }
});
Router.get("/", async (req, res) => {
  try {
    const contactList = await Contact.find({});
    res.status(201).json({ msg: "contact created !", data: contactList });
  } catch (error) {
    res.status(500).json({ msg: "error server", error });
  }
});
Router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, { ...req.body });
    const findContactUpdated = await Contact.findById(id);
    res.status(201).json({ msg: "contact update!", data: findContactUpdated });
  } catch (error) {
    res.status(500).json({ msg: "error server", error });
  }
});
module.exports = Router;
