/* Modulos Nativos. */

/* Modulos Instalados. */
const express = require("express");
const app = express();

/* Modulos Personales. */

/* 
===================================================================================================
Controllers.
===================================================================================================
*/
const controller = {
    home: function (req, res) {
        res.render("home");
    },
};

module.exports = controller;
