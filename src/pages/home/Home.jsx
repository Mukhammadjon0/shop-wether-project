import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [chosenData, setChosenData] = useState([]);
  const [buttons, setButtons] = useState([0,1,3,4]);

  const API = "https://fakestoreapi.com/products";
  
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setData(res.data);
        setChosenData(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err.message));
  }, []);
 

  const changePage = (sahifa) => {
    setChosenData(data.slice(sahifa * 4, sahifa * 4 + 4));
  };

  return (
    <div className="home-page">
      <div className="product-card">
        {chosenData.map((product) => (
          <Products key={product.id} product={product} {...product} />
        ))}
      </div>
      {buttons.map((item, index) => (
        <button onClick={() => changePage(item)} key={index}>
          {item + 1}
        </button>
      ))}
    </div>
  );
}

export default Home;
