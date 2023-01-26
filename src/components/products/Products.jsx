import React, { useContext } from 'react'
import { StateContext } from '../../context'
import './Products.css'
function Products({id, title, image, price, product,pageCount}) {
  const {state, dispatch}=useContext(StateContext)
  const addToBasket = () => {
    const check = state.basket.some((item) => item.id === id);
    if (check) alert("bu oldin qoshilgan");
    else dispatch({ type: "ADD_TO_BASKET", payload: product});
  };
  return (
    <div className='products'>
        <h2>{id}</h2>
        <h3>Name: {title}</h3>
        <img src={image} alt={title} />
        <h1>Prise:{price}$</h1>
        <button onClick={addToBasket}>Add to Basket</button>
    
    </div>
  )
}

export default Products