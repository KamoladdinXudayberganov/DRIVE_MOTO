import React from "react";
import "./Footer.css";
import first from '../../../img/instagram.svg'
import second from '../../../img/vk.svg'
import third from '../../../img/face.svg'
import fours from '../../../img/you.svg'



const Footer = () => {
  return (
    <div className="footer__container">
        <div className="container d-flex justify-content-between">

      <div className="footer__item__one">
        <h2>
          Подпишитесь на нашу рассылку <br />и узнавайте о акция быстрее
        </h2>
        <input type="email" placeholder="Введите ваш e-mail:" />
        <button>Отправить</button>
      </div>
      <div className="footer__item__two">
        <li>Информация</li>
        <li>O компании</li>
        <li>Контакты</li>
        <li>Акции</li>
        <li>Магазины</li>
      </div>
      <div className="footer__item__thiree">
        <li>Интернет-магазин</li>
        <li>Доставка и самовывоз</li>
        <li>Оплата</li>
        <li>Возврат-обмен</li>
        <li>Новости</li>
        <li></li>
      </div>
      <div className="footer__item__for">
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
        <img src={fours} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Footer;