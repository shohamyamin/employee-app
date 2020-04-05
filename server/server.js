//code from : https://nodejs.org/en/docs/guides/getting-started-guide/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const utils = require("./utils");

const app = express();
const port = 3000;

// Database management is done by: https://github.com/typicode/lowdb
const adapter = new FileSync("db.json");
const db = low(adapter);

// Password hashing done by https://www.npmjs.com/package/bcrypt

const salt = bcrypt.genSaltSync(10);

app.use(cors());

app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  const employees = db
    .get("employees")
    .filter((employee) => {
      const search = req.query.search || "";
      return utils.employeeToString(employee).includes(search);
    })
    .map((employee) => ({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      role: employee.role,
    }))
    .value();
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;
  const employeeById = db.get("employees").find({ id: employeeId }).value();
  res.json(employeeById);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = db.get("users").find({ username: req.body.username }).value();
    if (!user) {
      return res.sendStatus(401);
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.sendStatus(401);
    }
    res.json({});
  } catch (err) {
    console.log("error" + err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
