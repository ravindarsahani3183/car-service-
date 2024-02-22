import nexon_icon from "../img/nexon.jpeg";
import './frontPage.css';
const FrontPage = () => {
  return (
    <div className="front-img">
      <h4 className="car-title">Meet your new car</h4>
      <h2 className="car-name">Nexon Car</h2>
      <div className="car-button">
        <button type="submit" className="detail-button">More detail</button>
        <button type="submit" className="test-buuton">Test Drive</button>
      </div>
      <img src={nexon_icon} className="car-img" alt=''></img>
    </div>
  )
}


export default FrontPage