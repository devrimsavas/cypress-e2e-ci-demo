const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const admin = {
  adminName: "devrim",
  adminPass: "12345",
};

app.get("/", (req, res) => {
  const indexPage = path.join(__dirname, "public", "index.html");
  res.sendFile(indexPage);
});

app.post("/", (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);

  if (name != admin.adminName || password != admin.adminPass) {
    return res.status(401).json({
      message: "not allowed",
    });
  }
  return res.status(200).json({
    message: "OKAY BOSS",
  });
});

app.get("/adminpage", (req, res) => {
  const adminPage = path.join(__dirname, "public", "admin.html");
  res.sendFile(adminPage);
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
