const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("./database");
// basic boilerplate
app.use(bodyParser.json());
app.use(cors());
// API
const users = require("/api/users");
app.use("/api/users", users);
