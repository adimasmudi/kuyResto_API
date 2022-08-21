var express = require("express");
var router = express.Router();

const MenuController = require("../controllers/MenuController");

// menu router
router.get("/v1/menu", MenuController.displayMenu);

module.exports = router;
