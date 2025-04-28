const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet")
const bodyParser = require("body-parser");

const usuariosRoute = require("./routes/login.route");
const usuariosRoute1 = require("./routes/cadastro.route");
const usuariosRoute2 = require("./routes/atualizar.route");


app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.header("Acces-Control-Allow-Origin","*");
  res.header(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accep, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header("Acces-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
  }
  next();
});


app.use("/usuarios", usuariosRoute);
app.use("/usuarios", usuariosRoute1);
app.use("/usuarios", usuariosRoute2);


module.exports = app;

//commit