import React from 'react'

const SideBar = ({size, color, handleColor, handleSize, changeFontStyle}) => {
  return (
    <div className="sidebar">
        <input type="text" placeholder="Size here" onChange={handleSize} value={size} />
        <input type="text" placeholder="Color Here" value={color} onChange={handleColor}/>
        <button onClick={changeFontStyle}>Make the text 20px and pink</button>
    </div>
  )
}

export default SideBar