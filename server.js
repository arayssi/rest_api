const express = require("express");
const connect = require("./config/connectDB");
const Contact = require("./models/contact");

const app = express();
connect();

const PORT = 4000;

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));

const addContact = new Contact({
  firstName: "mohamed2",
  lastName: "araysii",
  email: "araysimohamedali04@gmail.com",
  phoneNumber: 21815481,
});
//addContact.save();
const multiContact = [
  {
    firstName: "islem",
    lastName: "Baldi",
    email: "islembaldi044@gmail.com",
    phoneNumber: 94444190,
  },
  {
    firstName: "islaam",
    lastName: "baldyyyy",
    email: "islemmohamedali045@gmail.com",
    phoneNumber: 21815481,
  },
];
//Contact.create(multiContact);
Contact.findById("65fcc530c943f39efa4a61f0").then((data) => console.log(data));
