var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coder Factory' });
});

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json( { // respond with json.
    "GET /api/cart": "returns the itmes in the shopping cart",
    "POST /api/cart/add": "add itmes into the shopping cart",
    "DELETE /api/cart/remove/:id": "remove itmes from the shopping cart"

 });
});

module.exports = router;
