const express = require("express");
const connect = require("./config/connectDB");
const ContactRoutes = require("./routes/ContactRoutes");
const app = express();
app.use(express.json());
app.use("/api/v1/contact", ContactRoutes);
connect();

const PORT = 4000;

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
