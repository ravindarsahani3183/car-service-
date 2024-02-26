import React from 'react'
import service1_icon from "../img/service1.jpg"
import "./service.css"
const Service = () => {
  return (
    <div>
         <h3 className='service-title'>Car Service</h3>
        <div className='service'>
        <div className='service-img'>
           <img src={service1_icon} className="service-car" alt=''></img>
        </div>
        <div className='service-para'>
            <h3 className='service-text'>About us</h3>
            <p className='service-text1'>
                One stop solution to get your car repaired and serviced<br/>
                At AutoMob-Mechanic, we aim to make the car repair and service experience<br/>
                straightforward by providing services for repairing, servicing and maintaining -
                lending our expertise in all forms.
            </p>
            <h3 className='service-text'>How it Works?</h3>
            <h4 className='service-text'>Choose the service</h4>
            <p className='service-text'>
            Choose the perfect service for your car.
            </p>
            <h4 className='service-text'>Book an Appointment</h4>
            <p className='service-text'>
             Book an appointment with us on your convenient date.
            </p>
            <h4 className='service-text'>Get your Car Fixed</h4>
            <p className='service-text'>
            No need to wait, our representative will take care of everything on their
            own.
            </p>
            <button onclick="service_explore()" className='service-button'>Explore More</button>
            <div className='service-element'>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Service