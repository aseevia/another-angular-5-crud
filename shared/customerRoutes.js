var express = require('express');
var app = express();
var customerRoutes = express.Router();

// Require Customer model in our routes module
var Customer = require('./customer.model');

/**
* Add new customer route
* @returns {json} customer data if successful, or error object.
*/
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

/**
* Get index or listing route
* @returns {json} array of customer objects if successful, or error object.
*/
customerRoutes.route('/').get(function (req, res) {
  Customer.find(function (err, customers) {
    if (err) {
      res.json(err);
    } else {
      res.json(customers);
    }
  });
});

/**
* Get single item by id route
* @returns {json} customer data if successful, or error object.
*/
customerRoutes.route('/get/:id').get(function (req, res) {
  var id = req.params.id;
  Customer.findById(id, function (err, customer) {
    if (err) {
      res.json(err);
    } else {
      res.json(customer);
    }
  });
});

/**
* Update route
* @returns {json} customer data if successful, or error object.
*/
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

/**
* Delete route
* @returns {json} customer data if successful, or error object.
*/
customerRoutes.route('/delete/:id').get(function (req, res) {
  Customer.findByIdAndRemove({
    _id: req.params.id
  }, function (err, customer) {
    if (err) res.json(err);
    else res.json(customer);
  });
});

module.exports = customerRoutes;
