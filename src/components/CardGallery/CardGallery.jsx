import { useEffect, useState } from "react";
import "./CardGallery.css"
import RoomGalleryData from "../../Data/RoomGalleryData";

const CardGallery = ({imgs, title, desc}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 40000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
      <div className="cardGallery">
          <div className="imgs">
              {imgs?.map((img, index) => {
                  return(
                      <img className={current === index ? "active" : ""} key={index} src={img}/>
                  )
              })}
          </div>
          <div className="titleGalery">
              <h2>{title}</h2>
              <div className="arrows">
                  <button className="left" >
                      <img src="assets/img/arrow-left.png" alt="" onClick={prevSlide}  />
                  </button>
                  <button className="right">
                      <img src="assets/img/arrow-right.png" alt="" onClick={nextSlide} />
                  </button>
              </div>
          </div>
          <p>{desc}</p>
      </div>
  )
}

export default CardGallery
