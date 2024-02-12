import service_icon from "../img/service.jpg";
import Wash_icon from "../img/Wash_car.jpeg";
import Booking_icon from "../img/Booking_car.jpeg";
import './frontPage.css';
const FrontPage = () => {
  return (
    <div className="front-img">
        <img src={service_icon} className="service-img" alt=''></img>
        <img src={Wash_icon} className="service-img" alt=''></img>
        <img src={Booking_icon} className="service-img" alt=''></img>
    </div>
  )
}

export default FrontPage