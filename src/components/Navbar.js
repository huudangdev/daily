import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed-top'>
      <nav className='navbar navbar-expand-lg navbar-dark mx-background-top-linear' style={{ backgroundColor: '#e3f2fd' }}>
        <div className='container'>
          <a className='navbar-brand' href='/daily'><h6 className='g-color-white-opacity-0_8 g-font-size-13'> VỒ CÁ BU LA RI CỦA CAM </h6></a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>

            <ul className='navbar-nav ml-auto'>

              <li className='nav-item active'>
                <a className='nav-link' href='/daily'>Home
                  <span className='sr-only'>(current)</span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/daily'>About</a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/daily'>Blog</a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/daily'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
