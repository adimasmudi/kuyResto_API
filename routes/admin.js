var express = require("express");
var router = express.Router();

const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.index);
router.get("/customer", AdminController.displayCustomer);
router.get("/menu", AdminController.displayMenu);
router.get("/transaction", AdminController.displayTransaction);

module.exports = router;
