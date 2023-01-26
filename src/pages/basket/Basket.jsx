import React, { useContext } from "react";
import { StateContext } from "../../context";
import './Basket.css'
function Basket() {
  const { state } = useContext(StateContext);
  return (
    <div className="basket-page">
      <h2>Tanlangan mahsulotlar</h2>
      <div className="basket-cards">
        {state.basket.map((item) => (
          <div className="basket_card" key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
