var express = require("express");
var router = express.Router();

const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.index);
router.get("/customer", AdminController.displayCustomer);
router.get("/customer/:id", AdminController.displayCustomerDetail);
router.get("/menu", AdminController.displayMenu);
router.get("/menu/add", AdminController.displayAddMenu);
router.get("/transaction", AdminController.displayTransaction);
router.get("/cart", AdminController.displayCart);

module.exports = router;
