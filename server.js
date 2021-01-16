const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("./database");
// basic boilerplate
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// API
const users = require("./api/users.js");
app.use("/api/users", users);
// NEXT FEW LINES ARE UNCERTAIN
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});
// **** END OF UNCERTAIN CODE ****

// SETTING UP INITIAL GET REQUEST FOR TESTING
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// port settings
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
