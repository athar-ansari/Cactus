import React, { useEffect } from "react";
import ShopItem from "../ShopItem/ShopItem";
import { Link } from "react-router-dom";
import { IoCaretBackCircleSharp } from "react-icons/io5";

import shopCactus1 from "/IMAGES/shop-cactus-1.png";
import shopCactus2 from "/IMAGES/shop-cactus-2.png";
import shopCactus3 from "/IMAGES/shop-cactus-3.png";
import shopCactus4 from "/IMAGES/shop-cactus-4.png";
import shopCactus5 from "/IMAGES/shop-cactus-5.png";

const items = [
  {
    id: 1,
    name: "Echeveria Succulent",
    price: 0,
    image: shopCactus3,
  },
  {
    id: 2,
    name: "Gymnocalycium Cactus",
    price: 15,
    image: shopCactus1,
  },
  {
    id: 3,
    name: "Echeveria Succulent",
    price: 10,
    image: shopCactus5,
  },
  {
    id: 4,
    name: "Gymnocalycium Cactus",
    price: 15,
    image: shopCactus1,
  },
  {
    id: 5,
    name: "Echeveria Succulent",
    price: 10,
    image: shopCactus2,
  },
  {
    id: 6,
    name: "Echeveria Succulent",
    price: 100,
    image: shopCactus3,
  },
  {
    id: 7,
    name: "Echeveria Succulent",
    price: 10,
    image: shopCactus4,
  },
  {
    id: 8,
    name: "Echeveria Succulent",
    price: 10,
    image: shopCactus5,
  },
];


const MoreItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="shop section more-item-page" id="more-items">
        <Link to="/" className="shop--back--btn">
          <IoCaretBackCircleSharp size="1.35rem" />
          Back
        </Link>
        <h2 className="section--title">MORE PLANTS</h2>
        <div className="shop--container container grid">
          {items.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MoreItems;
