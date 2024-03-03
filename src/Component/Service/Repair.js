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
            <p>Our representatives are professionaly trained and skilled with latest and futursitic techniques to provide a best quality service.</p>
            <p>At AutoMob-Mechanic, we provide a high class service to the customers for their happy and memorable driving experience.</p>
            <div className='repair'>
                <div className='repair-card'>
                    <h4>Preventive Maintenance Service</h4>
                    <img src={wash_icon} className="car-img" alt=''></img>
                    <p>Periodically check and keep your car running.</p>
                    <span>Offer: 20%</span>
                    <button>more detail</button>
                </div>
                <div className='repair-card'>
                <h4>Preventive Maintenance Service</h4>
                    <img src={service3_icon} className="car-img" alt=''></img>
                    <p>Periodically check and keep your car running.</p>
                    <span>Offer: 20%</span>
                    <button>more detail</button>
                </div>
                <div className='repair-card'>
                <h4>Preventive Maintenance Service</h4>
                    <img src={repair_icon} className="car-img" alt=''></img>
                    <p>Periodically check and keep your car running.</p>
                    <span>Offer: 20%</span>
                    <button>more detail</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repair