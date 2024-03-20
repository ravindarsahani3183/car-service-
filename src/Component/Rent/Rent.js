import React from 'react'
import "./rent.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ford from "../img/ford.jpg";
import mazda from "../img/mazda.jpg";
import mercedes from "../img/mercedes.jpg";
import nissan from "../img/nissan.jpg";
const Rent = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='rent'>
      <h2 className='rent-title'>Rent Car</h2>
      <div className='rent-slider'>
      <Carousel responsive={responsive}>
        <div className='rent-card'>
          <img src={ford} className="rent-img" alt=''></img>
        </div>
        <div className='rent-card'>
          <img src={mazda} className="rent-img" alt=''></img>
        </div>
        <div className='rent-card'>
          <img src={mercedes} className="rent-img" alt=''></img>
        </div>
        <div className='rent-card'>
          <img src={nissan} className="rent-img" alt=''></img>
        </div>
        <div className='rent-card'>
          <img src={nissan} className="rent-img" alt=''></img>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Rent