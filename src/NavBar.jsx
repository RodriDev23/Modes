import React from 'react'

function NavBar(props) {
  return (
    <nav 
     className={props.darkMode ? "dark" : ""}
    >
        <img src="./imgs/react-icon-small.png" alt="" className='"nav--logo_icon"' />
        <h2 className='nav--logo_text'>React Facts</h2>
       <div className='toggler'>
          <p className='toggler--light'>Light</p>
          <div className='toggler--slider' onClick={props.toggleDarkMode}>
            <div className='toggler--slider--circle'></div>
          </div>
          <p className='toggler-dark'>dark</p>
       </div>
    </nav>
  )
}

export default NavBar
