import React from 'react'

const Footer = ({changeFontSize, handleLike}) => {
  return (
    <footer className="footer">
        <p>
          This is the footer. <button onClick={changeFontSize}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button onClick={handleLike}>Like The Page</button>
        </p>
      </footer>
  )
}

export default Footer