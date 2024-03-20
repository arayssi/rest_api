const express = require("express");

const app = express();

const PORT = 4000;

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
const today = new Date();
const day = today.getDay();
const hours = today.getHours();

console.log(day, hours);
if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
  app.use(express.static("pubique"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
} else {
  app.use(express.static("closed"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/closed/index.html");
  });
}
