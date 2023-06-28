import React from 'react'
import './Nav.css'

//create one nav element per page?
//or just hard code it?

const Nav = () => {
  return (
    <nav>
        <div class='nav-items'>
            <button><span>00</span></button>
            <button><span>01</span></button>
            <button><span>02</span></button>
            <button><span>03</span></button>
            <button><span>04</span></button>
            <button><span>05</span></button>
        </div>
    </nav>
  )
}

export default Nav