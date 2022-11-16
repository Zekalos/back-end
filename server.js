const express = require("express");
const cors = require("cors");
const argon2 = require("argon2");
const app = express();
const path = require('path');
var corsOptions = {
  origin: "https://dbsolution.herokuapp.com"
};

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// db.sequelize.sync(
//  /*{ force: true }).then(() => {
//   console.log("Drop and re-sync db.");

// }*/
// );

require("./routes/masterBarangRoutes")(express, app);
require("./routes/barangMasukRoutes")(express, app);
require("./routes/barangSisaRoutes")(express, app);
require("./routes/barangKeluarRoutes")(express, app);
require("./routes/historyRoutes")(express, app);
require("./routes/inventoryRoutes")(express, app);
require("./routes/userRoutes")(express, app);
require("./routes/proyekRoutes")(express, app);
require("./routes/purchasingRoutes")(express, app);
require("./routes/activityRoutes")(express, app);
require("./routes/supplierRoutes")(express, app);
require("./routes/budgetRoutes")(express, app);
require("./routes/assetRoutes")(express, app);
require("./routes/satuanRoutes")(express, app);
require("./routes/RAPRoutes")(express, app);

const publicPath = path.join(__dirname + "/public");

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
