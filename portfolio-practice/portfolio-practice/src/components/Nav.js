import React from 'react'
import { useState } from 'react'

//create one nav element per page?
//or just hard code it?

const Nav = () => {
  //add a conditional element for the nav bar?
  //add a class to the button so it expands
  //const [theNav, openNav] = useState(false)

  // const bigNav = () => {
  //   openNav(true)
  // }

  const navButton = document.querySelector('.nav-item')
  navButton.addEventListener('click', function(){
    navButton.classList.add('open')
  })

  return (
    <div class="navigation">
      <nav>
        <button className='nav-item' >
          <span className='nav-item-number'>00</span>
          <span className='nav-item-text'>Hello</span>
        </button>
        <button className='nav-item'>
          <span className='nav-item-number'>01</span>
          <span className='nav-item-text'>Approach</span>
        </button>
      </nav>
    </div>
  )
}

export default Nav