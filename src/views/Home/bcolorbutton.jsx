import React from 'react'
import './bcolorbutton.css'
function BColorButton({ bckcolor, setBckcolor }) {
  return (
    <div
      className='bcolor-button'
     onClick={() => setBckcolor(bckcolor)}
        style={{ backgroundColor: bckcolor }}
    ></div>
  )
}

export default BColorButton