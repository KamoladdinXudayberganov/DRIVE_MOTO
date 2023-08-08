import React, { useState } from "react";
import "./Products.css";
import productsimg0 from "../../../img/savat.png";
import productsimg1 from "../../../img/sumka.png";
import productsimg2 from "../../../img/jaket.png";
import productsimg3 from "../../../img/vintilatr.png";
import productsimg4 from "../../../img/primishka.png";

export const Products = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  function handleCounter() {
    setCount1(count1 + 1);
  }
  function handleCounter1() {
    setCount2(count2 + 1);
  }
  function handleCounter2() {
    setCount3(count3 + 1);
  }
  function handleCounter3() {
    setCount4(count4 + 1);
  }
  return (
    <div className="products__container">
      <div className="products__title">
        <h1>Популярные товары</h1>
      </div>
      <div className="products__text">
        <ul>
          <li>запчасти</li>
          <li>моторы</li>
          <li>шины </li>
          <li>электроника</li>
          <li>инструменты</li>
          <li>аксессуары </li>
        </ul>
      </div>
      <div className="products__container__card">
        <div className="products__card">
          <img className="products__bag" src={productsimg1} alt="" />
          <p>
            Водонепроницаемый <br />
            Рюкзак
          </p>
          <h3>9 800 ₽</h3>
          <button
            style={{ backgroundColor: count1 && "green" }}
            className="products__basket"
            onClick={handleCounter}>
            <img src={productsimg0} alt="" />
            <span className="basket__count">{count1 !== 0 && count1}</span>
          </button>
        </div>
        <div className="products__card">
          <img className="products__bag" src={productsimg2} alt="" />
          <p>
            Водонепроницаемый <br />
            Рюкзак
          </p>
          <h3>9 800 ₽</h3>
          <button
            style={{ backgroundColor: count2 && "green" }}
            className="products__basket"
            onClick={handleCounter1}>
            <img src={productsimg0} alt="" />
            <span className="basket__count">{count2 !== 0 && count2}</span>
          </button>
        </div>
        <div className="products__card">
          <img className="products__bag" src={productsimg3} alt="" />
          <p style={{color:'#1C62CD'}}>BRP Audio-Premium <br /> System</p>
          <h3 style={{color:'#1C62CD'}}>68 000 ₽</h3>
          <button
            style={{ backgroundColor: count3 && "green" }}
            className="products__basket"
            onClick={handleCounter2}>
            <img src={productsimg0} alt="" />
            <span className="basket__count">{count3 !== 0 && count3}</span>
          </button>
        </div>
        <div className="products__card">
          <img className="products__bag" src={productsimg4} alt="" />
          <p>
            Водонепроницаемый <br />
            Рюкзак
          </p>
          <h3>9 800 ₽</h3>
          <button
            style={{ backgroundColor: count4 && "green" }}
            className="products__basket"
            onClick={handleCounter3}>
            <img src={productsimg0} alt="" />
            <span className="basket__count">{count4 !== 0 && count4}</span>
          </button>
        </div>
      </div>
      <div className="products__footer__btn">
        <button>Показать еще</button>
      </div>
    </div>
  );
};
