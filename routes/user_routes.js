
const express = require('express');
const router = express.Router();
const order = require('../controller/user_controller');


router.post("/addOrder", order.saveOrder);

router.get("/retrieveOrders", order.RetrieveAllOrder);


module.exports = router;

