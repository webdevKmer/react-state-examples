import React from 'react'

const Header = ({size, color, like}) => {
  return (
    <div className="header">
        <h1>Welcome To Our App</h1>
        <p>The current size is {size} and the current color is <span style={{color}}>{color}</span>.</p>
        <p>
          This page has been liked <strong>{like}</strong> times.
        </p>
      </div>
  )
}

export default Header