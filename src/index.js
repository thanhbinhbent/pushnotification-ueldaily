//import handlebars
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
//import morgan
const morgan = require("morgan");
const hbs = require("express-handlebars");
//use option of morgan
app.use(morgan("combined"));

const route = require("./routes");
const db = require("./config/db");
var admin = require("firebase-admin");
//connect Db
db.connectDb();

// Custom SRC Static file, khi gặp path, thì phải kiểm tra thư mục
app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Trở view vào thư mục resource
app.set("views", path.join(__dirname, "resources", "views"));
//use handle bar

// Route Init
route(app);

app.listen(3000);
