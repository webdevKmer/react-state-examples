import React from 'react'

const MainArea = ({size, color}) => {
  console.log(color);
  return (
    <div className="main-area" style={{fontSize: `${size}px`, color:color}}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
  </div>
  )
}

export default MainArea