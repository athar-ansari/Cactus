import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';

const ShopItem = ({ item }) => {
  return (
    <> 
    <article className="shop-card">
      <img src={item.image} alt="image" className="shop--img" />
      <h3 className="shop--title">{item.name}</h3>
      <span className="shop--price">${item.price}</span>
      <button className="shop--button">
        <RiShoppingBagLine />
      </button>
    </article>
    </>
  );
};

export default ShopItem;
