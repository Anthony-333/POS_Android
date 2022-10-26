const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models/index.js");
const sequelize = db.sequelize;

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const { func } = require("prop-types");

db.sequelize.sync();

//Check Database connection
app.get("/", (req, res) => {
  try {
    sequelize.authenticate().then(() => {
      res.json({ Status: "true" });
    });
  } catch (error) {
    res.json({ Status: "false" });
  }
});

require("./routes/Inventory.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
