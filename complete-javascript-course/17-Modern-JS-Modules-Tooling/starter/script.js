//* Exporting and Importing in ES6 Modules

// Importing modules
import message, {
  addToCart,
  cart,
  shippingCost,
  totalPrice,
  tq,
} from './shoppingCart.js';

console.log('Importing modules');

addToCart('Laptop', 1);
addToCart('Mouse', 1);
addToCart('Monitor', 1);

console.log({ shippingCost, cart, totalPrice, tq });

message('Jonas', 37);
