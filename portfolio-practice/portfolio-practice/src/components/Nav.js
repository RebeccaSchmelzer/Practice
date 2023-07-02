import React from 'react'

//create one nav element per page?
//or just hard code it?

const Nav = () => {
  return (
    <div class="navigation">
      <nav>
        <button className='nav-item'>
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