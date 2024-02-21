import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
      <div className='brand'>car</div>
        <div className='nav-element'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>Service</div>
            <div className='nav-item'>Rent</div>
            <div className='nav-item'>Auction</div>
            <div className='nav-item'>About</div>
        </div>
        <div>
         <button type='submit' className='sign-up'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar