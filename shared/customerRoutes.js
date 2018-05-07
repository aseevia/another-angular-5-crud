var express = require('express');
var app = express();
var customerRoutes = express.Router();

// Require Customer model in our routes module
var Customer = require('./customer.model');

// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  var customer = new Customer(req.body);
  customer.save()
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/').get(function (req, res) {
  Customer.find(function (err, customers) {
    if (err) {
      console.log(err);
    } else {
      res.json(customers);
    }
  });
});

// Defined get single item by id route
customerRoutes.route('/get/:id').get(function (req, res) {
  var id = req.params.id;
  Customer.findById(id, function (err, customer) {
    res.json(customer);
  });
});

// Defined update route
customerRoutes.route('/update/:id').post(function (req, res) {
  Customer.findById(req.params.id, function (err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
      customer.name = req.body.name;
      customer.birthday = req.body.birthday;
      customer.gender = req.body.gender;
      customer.save().then(customer => {
          res.json(customer);
        })
        .catch(err => {
          res.status(400).send(err);
        });
    }
  });
});

// Defined delete route
customerRoutes.route('/delete/:id').get(function (req, res) {
  Customer.findByIdAndRemove({
    _id: req.params.id
  }, function (err, customer) {
    if (err) res.json(err);
    else res.json(customer);
  });
});

module.exports = customerRoutes;
