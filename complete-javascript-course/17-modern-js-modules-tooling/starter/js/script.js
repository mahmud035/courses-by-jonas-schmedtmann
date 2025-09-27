//* Exporting and Importing in ES6 Modules

// Importing modules
// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

import message, {
  addToCart,
  cart,
  shippingCost,
  totalPrice,
  tq,
} from './shoppingCart.js';

{
  console.log('--------- Importing modules ---------');

  addToCart('Laptop', 1);
  addToCart('Mouse', 1);
  addToCart('Monitor', 1);
  message('Jonas', 37);
  console.log({ shippingCost, cart, totalPrice, tq });
}

//* Top-Level `await` means (Using await outside of an Asynchronous Function)

// IMPORTANT: Top-Level await এর মানে হলো await কে আমরা এখন Asynchronous Function এর বাইরেও লিখতে পারবো। তবে এটি শুধুমাত্র type="module" এর সাথেই কাজ করবে। 👇

// 👉 কারণ হলো, Asynchronous Function automatically Promise return করে। সেই Promise টা settled(either fulfilled or rejected) হওয়ার আগ পর্যন্ত আমাদেরকে await করতে হবে। একারণে, fetchPost() Asynchronous Function কে call করার সময় তার পূর্বে await keyword use করতে হয়েছে।

// IMPORTANT: Ensure proper error handling when using Top-Level `await` to handle any rejected promises.

{
  const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
    const data = await res.json();
    return data;
  };

  try {
    const post = await fetchPost(); // Using Top-Level `await` to fetch data
    console.log(post);
  } catch (error) {
    console.error(error);
  }
}

//* The Module Pattern

/* 
{
  const shoppingCart = (() => {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = (product, quantity) => {
      cart.push({ product, quantity });
      console.log(
        `${quantity} ${product} is added to cart (shipping cost is ${shippingCost})`
      );
    };

    const orderStock = (product, quantity) => {
      console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
    };
  })();

  console.log('Shopping cart =>', shoppingCart);
  shoppingCart.addToCart('Apple', 4);
  shoppingCart.addToCart('Pizza', 2);
  console.log(shoppingCart.totalPrice); // 237
  console.log(shoppingCart.shippingCost); // undefined
}
 */

//* Introduction to NPM
//* Bundling With Parcel and NPM Script

/* 
{
  const state = {
    cart: [
      { product: 'bread', quantity: 5 },
      { product: 'pizza', quantity: 5 },
    ],
    user: { isLoggedIn: true },
  };

  // const stateClone = { ...state };
  // state.user.isLoggedIn = false;
  // console.log(stateClone);

  const stateDeepClone = cloneDeep(state);
  state.user.isLoggedIn = false;
  console.log(stateDeepClone.__wrapped__);
}
 */
