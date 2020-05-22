const Order = require('../model/order');

exports.saveOrder = (req, res) => {
    console.log(req.body, " order body back end")
    const date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    const newOrder = new Order({
        costumer_name: req.body.costumer_name,
        viands: req.body.orders,
        date: date,
    });
    console.log(newOrder)
    newOrder.save((err, order) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        res.json(order)
    })
}

exports.RetrieveAllOrder = (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ data: orders })
    })
}