import React from 'react'
import './overlay-card.css'

const Overlay = ({ sketchie, showName }) => {
  const isWhite = sketchie.background === '#FFFFFF'

  console.log(isWhite)

  return (
    <div className={`overlay ${showName ? 'fade-in' : ''}`} style={{ backgroundColor: sketchie.background }}>
      <p className={`text-center ${isWhite ? 'black' : ''}`}>{sketchie.name}</p>
    </div>
  )
}

export default Overlay
