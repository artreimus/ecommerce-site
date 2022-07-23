import { nanoid } from "nanoid";

const products = [
  {
    name: "Cleopatra's Coat",
    image: "coat-women",
    id: "cleopatra-coat-women",
    gender: "women",
    category: "top",
    price: 200,
    quantity: 6,
  },
  {
    name: "Alexandrian Dress",
    image: "dress-women",
    id: "alexandrian-dress-women",
    gender: "women",
    category: "top",
    price: 100,
    quantity: 10,
  },
  {
    name: "Snake Heels",
    image: "heels-women",
    id: "snake-heels-women",
    gender: "women",
    category: "shoes",
    price: 100,
    quantity: 14,
  },
  {
    name: "Angelic Pants",
    image: "pants-women",
    id: "angelic-pants-women",
    gender: "women",
    category: "bottom",
    price: 100,
    quantity: 2,
  },
  {
    name: "Nike Maya",
    image: "shoes-women",
    id: "nike-maya-women",
    gender: "women",
    category: "shoes",
    price: 120,
    quantity: 6,
  },
  {
    name: "Nike Tech Fleece Shirt",
    image: "shirt-men",
    id: "nike-shirt-men",
    gender: "men",
    category: "top",
    price: 60,
    quantity: 9,
  },
  {
    name: "Nike Air Jump",
    image: "shoes-men",
    id: "nike-air-jump",
    gender: "men",
    category: "shoes",
    price: 120,
    quantity: 6,
  },
  {
    name: "Nike Fleece Shorts",
    image: "shorts-men",
    id: "nike-fleece-shorts",
    gender: "men",
    category: "bottom",
    price: 80,
    quantity: 3,
  },
];

// {
//   "headers":[
//     "name",
//     "quantity",
//     "price"
//   ],
//   "items":{
//     "1":{"name":"Inoculation","quantity":"1","price":"20"},
//     "2":{"name":"Pig","quantity":"3","price":"5"}
//   },
//   "total":35
// }

export default products;
