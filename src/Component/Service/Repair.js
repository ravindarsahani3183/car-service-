import React from 'react'
import wash_icon from "../img/wash.jpg";
import service3_icon from "../img/service3.jpg";
import repair_icon from "../img/repair.jpg";
import "./repair.css";
const Repair = () => {
  return (
    <div>
        <div>
            <h2 className='repair-title'>Car Repair and Service</h2>
            <p className='repair-desc'>Our representatives are professionaly trained and skilled with latest and futursitic techniques to provide a best quality service.</p>
            <p className='repair-desc'>At AutoMob-Mechanic, we provide a high class service to the customers for their happy and memorable driving experience.</p>
            <div className='repair'>
                <div className='repair-card'>
                    <h4 className='repair-card-title'>Preventive Maintenance Service</h4>
                    <img src={service3_icon} className="repair-img" alt=''></img>
                    <p className='repair-card-content'>Periodically check and keep your car running.</p>
                    <p className='repair-card-offer'>Offer: 20%</p>
                    <button className='repair-card-button'>more details</button>
                </div>
                <div className='repair-card'>
                <h4 className='repair-card-title'>Body Repair Service</h4>
                    <img src={repair_icon} className="repair-img" alt=''></img>
                    <p className='repair-card-content'>Full chasis body repair provided by the experts.</p>
                    <p className='repair-card-offer'>Offer: 15%</p>
                    <button className='repair-card-button'>more details</button>
                </div>
                <div className='repair-card'>
                <h4 className='repair-card-title'>Car Care Service</h4>
                    <img src={wash_icon} className="repair-img" alt=''></img>
                    <p className='repair-card-content'>Get your car sparkling clean in just minutes.</p>
                    <p className='repair-card-offer'>Offer: 10%</p>
                    <button className='repair-card-button'>more details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repair