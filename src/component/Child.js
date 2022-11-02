import React from 'react'
import '../App.css';

export  function Child(props) {
  return (
    <div className='btn_div'>
        <button onClick={props.data}>{props.buttonName}</button>
       
        
    </div>
  )
}

