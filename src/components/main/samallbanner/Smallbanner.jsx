import React from "react";
import "./Smallbanner.css";
import smallbannerigm1 from "../../../img/imgg1.png";
import smallbannerigm2 from "../../../img/imgg2.png";

const Smallbanner = () => {
  return (
    <div className="smallbanner__container">
      <div className="smallbanner__box">
        <div className="smallbanner__box__img">
          <img src={smallbannerigm1} alt="" />
          <img src={smallbannerigm2} alt="" />
        </div>
        <div className="smallbanner__text">
          <h1>
            CKИДKИ <br /> на все запчасти <br /> до 70%
          </h1>
        </div>
        <div className="smallbanner__btn">
            <button>ПОСМОТЕТЬ BCE</button>
        </div>
      </div>
    </div>
  );
};

export default Smallbanner;
