/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");
const path_public = path.resolve(__dirname, "./public");

/* Modulos Instalados. */
const express = require("express");
const app = express();

/* Modulos Personales. */
const routers = require("./routers/routers");

/* 
===================================================================================================
Apps.
===================================================================================================
*/

const PORT = 3000;

app.listen(PORT, console.log("Port: 3000"));

app.set("view engine", "ejs");

app.use(express.static(path_public));

app.use("", routers);
