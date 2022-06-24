/* Modulos Nativos. */

/* Modulos Instalados. */
const express = require("express");
const app = express();

/* Modulos Personales. */
const array = require("../dataBase/dataBase");

/* 
===================================================================================================
Controllers.
===================================================================================================
*/
const controller = {
    home: function (req, res) {
        res.render("home");
    },
    escritorio: function (req, res) {
        let parametro = req.params.id;
        let respuesta = array.find((element) => element.id == parametro);
        res.render("escritorio", { objeto: respuesta });
    },
};

module.exports = controller;

/* 
Return = retorna, True or False.
Find = retorna, 1° Elemento True. 
Render = retorna, Pagina EJS, Objeto.
*/
