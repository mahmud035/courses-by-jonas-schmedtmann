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

//* Top-Level await (ES2022) means (Using await outside of an Asynchronous Function)

// IMPORTANT: Top-Level await (ES2022) এর মানে হলো await কে আমরা এখন Asynchronous Function এর বাইরেও লিখতে পারবো। তবে এটি শুধুমাত্র type="module" এর সাথেই কাজ করবে। 👇

// 👉 কারণ হলো, Asynchronous Function automatically Promise return করে। সেই Promise টা settled(either fulfilled or rejected) হওয়ার আগ পর্যন্ত আমাদেরকে await করতে হবে। একারণে, getLastPost() Asynchronous Function কে call করার সময় তার পূর্বে await keyword use করতে হয়েছে।

// IMPORTANT: Ensure proper error handling when using Top-Level await to handle any rejected promises.

{
  const getLastPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { title: data.at(-1).title, text: data.at(-1).body };
  };

  try {
    const lastPost = await getLastPost(); // Using Top-Level await to fetch data
    console.log(lastPost);
  } catch (error) {
    console.error(error);
  }
}
