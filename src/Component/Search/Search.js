import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./search.css";
const Search = () => {
  return (
    <div>
        <div>
            <h3>
                which vehicle you are looking for ?
            </h3>
        </div>
        <div className='searchdiv'>
            <input type='text' placeholder='Type'></input>
            <input type='number' placeholder='Year'></input>
            <input type='text' placeholder='Model'></input>
            <input type='number' placeholder='Price'></input>
            <button className='btn primaryBtn flex'>
              <CiSearch/>  
            </button>
        </div>
    </div>
  )
}

export default Search