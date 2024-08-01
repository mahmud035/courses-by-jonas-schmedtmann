// Exporting modules
console.log('Exporting modules');

//* Named Export (In-line individually)
export const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//* Named Export (All at once at the bottom)
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//* Default Export
const message = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

export default message;
