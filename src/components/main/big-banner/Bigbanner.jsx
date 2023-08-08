import {Carousel} from 'react-carousel-minimal'

import React from "react";
import "./Bigbanner.css";
import banner from "../../../img/banner.png";


const Bigbanner = () => {
  const data = [
    {
      image:
      "https://media.istockphoto.com/id/138278654/photo/man-driving-jet-ski-making-waves.jpg?s=612x612&w=0&k=20&c=u-uck8eCnzdtD7iUnFcMYlLH4OEEjw6n5B5Lr8fXtO8="
    },
    {
      image:
      "https://www.ravinehotel.com/assets/images/gallery/gallery_images/adventure-sports/jet-ski/Water-Sports-in-Panchgani-Jet-Ski.jpg"
    },
    {
      image:
      "https://cdn.webrazzi.com/uploads/2022/08/yemeksepeti-793.png"
    },
    {
      image:
      "https://www.startupselfie.net/wp-content/uploads/2021/04/GIBBS-Biski-Amphibious-Motorcycle.jpg"
    },
    {
      image:
      "https://gibbsamphibians.com/wp-content/uploads/2015/10/biski7-1.jpg"
    },
    {
      image:
      "https://thingsidesire.com/wp-content/uploads/2018/09/Water-Dirt-Bike2.jpg"
    },
    {
      image:
      "https://c1.wallpaperflare.com/preview/1001/192/48/jet-ski-water-sport-water-bike-water.jpg"
    },
    {
      image:
      "https://cdn.pixabay.com/photo/2016/01/07/05/00/jet-ski-1125328_640.jpg"
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="bigbanner__container">
      <div className="main-container">
        {}
        <div style={{ textAlign: "center" , width:'100%' }}>
          <div style={{ padding: "0 20px 0 0" }}>
            <Carousel
              data={data}
              time={2000}
              width="1000px"
              height="485px"
              captionStyle={captionStyle}
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              // radius="10px"
              // pauseIconColor="red"
              // slideBackgroundColor="none"
              pauseIconSize="2px"
              slideImageFit="cover"
              slideImagePosition="center"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1000px",
                maxHeight: "500px",
                margin: "0px auto 40px 0",
              }}
            />
          </div>
        </div>
        {}
        <div className="main-box">
          <div className="main-text">
            <span>акция</span>
            <h5 style={{ color: "#1C62CD ", fontSize: "20px" }}>190 000$</h5>
          </div>
          <img
            src="https://komandor-boats.ru/upload/iblock/9af/9af5456f86cf0a3a169ff95da4443f34.png"
            alt=""
          />
          <div className="main-text2">
            <h4>
              Лодочный мотор <br />
              Suzuki DF9.9BRS
            </h4>
          </div>
          <div className="banner__right-box-footer">
            <h4>Акция действует до</h4>
            <p style={{ color: "#1C62CD" }}>31.08.2020 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigbanner;
