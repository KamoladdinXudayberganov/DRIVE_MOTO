import React from "react";
import "./Catigoria2.css";
import productsimg0 from "../../../img/savat.png";
import catigoria2img1 from "../../../img/kalonka.png";
import catigoria2img2 from "../../../img/planshet.png";
import catigoria2img3 from "../../../img/prujin.png";
import catigoria2img4 from "../../../img/kiyim.png";

const Catigoria2 = () => {
  return (
    <div style={{ marginTop: "100px" }} className="catigoria2__container">
      <div className="catigoria2__title1">
        <h1>С этим товаром покупают</h1>
      </div>
      <div className="catigoria2__subtitle">
        <ul>
          <li>запчасти</li>
          <li>моторы</li>
          <li>шины </li>
          <li>электроника</li>
          <li>инструменты</li>
          <li>аксессуары </li>
        </ul>
      </div>
      <div className="catigoria2__container__card">
        <div className="catigoria2__card">
          <div className="card_subtitle">
            <img style={{ width: "150px" }} src={catigoria2img1} alt="" />
          </div>
          <h3>BRP Audio-портативная система</h3>
          <h2>нет в наличии</h2>
          <h4>Сообщить o поступлении</h4>
        </div>
        <div className="catigoria2__card">
          <div className="card_subtitle">
            <img style={{ width: "150px" }} src={catigoria2img2} alt="" />
          </div>
          <h3>
            Garmin Echomap <br /> Plus 62cv
          </h3>
          <h2>45 800 ₽</h2>
          <button className="catigoria2__card__img2">
            <img style={{ width: "35px" }} src={productsimg0} alt="" />
          </button>
        </div>
        <div className="catigoria2__card">
          <div className="card_subtitle">
            <img style={{ width: "150px" }} src={catigoria2img3} alt="" />
          </div>
          <h3>BRP Audio-портативная система</h3>
          <h2>нет в наличии</h2>
          <h4>Сообщить o поступлении</h4>
        </div>
        <div className="catigoria2__card">
          <div className="card_subtitle">
            <img style={{ width: "150px" }} src={catigoria2img4} alt="" />
          </div>
          <h3>Мужской костюм <br /> 3мм</h3>
          <h2>7 000 ₽</h2>
        </div>
      </div>
    </div>
  );
};

export default Catigoria2;
