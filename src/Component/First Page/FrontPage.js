import React, { useState } from 'react'
import service_icon from "../img/service.jpg";
import Wash_icon from "../img/Wash_car.jpeg";
import Booking_icon from "../img/Booking_car.jpeg";
const FrontPage = () => {
  const [showslider, setShowSlider] = useState(true)
  return (
    <div>
        <img src={service_icon} alt=''></img>
        <img src={Booking_icon} alt=''></img>
        {
          
        }
    </div>
  )
}

export default FrontPage