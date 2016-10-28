// creating base module for basic logic

var cart = []; // create an empty cart

// define function to get a cart
var shoppingCartModel = {
  getCart: function getCart(){
    return cart; // pass this object out
  },
  totalCost: function totalCost(){
    let totalCost = 0;
    for( let index in cart ) {  // either or below same outcome. uncached, more accurate.
    totalCost += cart[index].price;
    // for( let index = 0; index < cart.length; index++) {
    //   totalCost += cart[index].price;
    }
    return totalCost; // make sure return is outside of loop
  },

  addItemToCart: function addItemToCart(item){  // method to add items
    let product = {
      id: cart.length,      // sanitizing allowed params item id to position in array index
      brand: item.brand,    // sanitizing allowed params
      name: item.name,      // sanitizing allowed params
      price: item.price     // sanitizing allowed params
    };
    return ( cart.length < cart.push( product ) )
  },

  removeItemFromCart: function removeItemFromCart(id) {
    let item = parseInt(id);
    if ( typeof parseInt(id) === 'number' && !isNaN( item ) ) { // parse input check if it is a number if true then splice that item
      if( cart[item] ) { // check to see if there is an item in cart before deleting
        cart.splice(item, 1); // if all conditions ok then delete item for 1 instance
        return true;
      }
    }
    return false;
  }
};

// passes contents of this module to the router so we can use it inline at those routes.
module.exports = shoppingCartModel;
