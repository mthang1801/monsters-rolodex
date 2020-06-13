import React from 'react'
import "./search-box.style.css";
export const SearchBox = (props) => {
  return (
    <div >
      <input
        className="search-box"
        type="search"
        name={props.name}        
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
   
  )
}

