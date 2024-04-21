import React from 'react';
import ShopItem from './ShopItem/ShopItem';
import { Link } from 'react-router-dom';

import shopCactus1 from "/IMAGES/shop-cactus-1.png";
import shopCactus2 from "/IMAGES/shop-cactus-2.png";
import shopCactus3 from "/IMAGES/shop-cactus-3.png";
import shopCactus4 from "/IMAGES/shop-cactus-4.png";
import shopCactus5 from "/IMAGES/shop-cactus-5.png";


const items = [
  {
    id: 1,
    name: 'Gymnocalycium Cactus',
    price: 15,
    image: shopCactus1,
  },
  {
    id: 2,
    name: 'Echeveria Succulent',
    price: 10,
    image: shopCactus2,
  },
  {
    id: 3,
    name: 'Echeveria Succulent',
    price: 10,
    image: shopCactus3,
  },
  {
    id: 4,
    name: 'Echeveria Succulent',
    price: 10,
    image: shopCactus4,
  },
  {
    id: 5,
    name: 'Echeveria Succulent',
    price: 10,
    image: shopCactus5,
  },
 
];

const Shop = () => {
  return (
    <section className="shop section sctn" id="shop">
    <h2 className="section--title">THE BEST PLANTS</h2>
    <div className="shop--container container grid">
      {items.slice(0, 5).map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
    <Link to="/more-items" className="show--more--item">Show More Items</Link>
  </section>
  );
};

export default Shop;
