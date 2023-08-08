import React from "react";
import "./Catigoria.css";
import image1 from "../../../img/img1.png";
import image2 from "../../../img/img2.png";
import image3 from "../../../img/img3.png";
import image4 from "../../../img/img4.png";
import image5 from "../../../img/img5.png";
import image6 from "../../../img/img6.png";

const Catigoria = () => {
  return (
    <div className="catigoria_container">
      <div className="catigoria_item1">
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Квадроциклы</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "150px" }} src={image1} alt="" />
          </div>
        </div>
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Гидроциклы</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "160px" }} src={image2} alt="" />
          </div>
        </div>
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Катера</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "200px" }} src={image3} alt="" />
          </div>
        </div>
      
      {/* <div className="catigoria_item2"> */}
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Снегоходы</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "170px" }} src={image4} alt="" />
          </div>
        </div>
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Вездеходы</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "160px" }} src={image5} alt="" />
          </div>
        </div>
        <div className="catigoria_card">
          <div className="card_subtitle">
            <h3>Двигатели</h3>
            <span>Подробее</span>
          </div>
          <div className="catigoria_img">
            <img style={{ width: "70px" }} src={image6} alt="" />
          </div>
        </div>
      {/* </div> */}
      </div>
    </div>
  );
};

export default Catigoria;
