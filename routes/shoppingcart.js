// this is the routering file where it determines what happens on requests e.g similaar to controller in rails

var express = require('express');
var router = express.Router();
var cart = require('../models/shoppingcart'); // calling the cart model (notice the .. to indicate that it is in a different folder from where this file is located )


/*use router module to 'get' root make available 'req'(require), 'res(respond)' and next helpers.
'res' respond with json object. map "/api/cart/" as resource with description
*/
router.get('/', function(req, res, next) {
  res.json( {
    "resource":"/api/cart/",
    "description": "returns the current cart",
    "cart": cart.getCart(),
    "totalCost": cart.totalCost(),                               // set inital cart cost as 0 so we can add to it as we add items
    "totalCartQuantity": cart.getCart().length    // use .length to determine the how many items
  });
});

router.post('/add', function(req, res, next) {
  res.json( {
    "resource":"/api/cart/add",
    "description": "add item to the current cart",
    "addItemToCart": cart.addItemToCart(req.body),
    "body": req.body, // using bodyParser for handle json body data
    // "params": req.paramsxxxxxx 
  });
});

router.delete('/remove/:id', function(req, res, next) {
  res.json( {
    "resource":"/api/cart/remove/:id",
    "description": "remove item from the current cart",
    "removeItemFromCart": cart.removeItemFromCart(req.params.id) // accessing id from params to remove item
  });
});

module.exports = router;
