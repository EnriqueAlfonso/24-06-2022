/* Modulos Nativos. */

/* Modulos Instalados. */
const express = require("express");
const app = express();
const router = express.Router();

/* Modulos Personales. */
const controllers = require("../controllers/controllers");

/* 
===================================================================================================
Routers.
===================================================================================================
*/

router.get("/", controllers.home);
router.get("/escritorio/:id?", controllers.escritorio);

module.exports = router;
