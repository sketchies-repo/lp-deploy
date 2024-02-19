import React from 'react'
import './overlay-card.css'

const OverlayCard = ({ sketchie, showName }) => {
  const isWhite = sketchie.background === '#FFFFFF'

  return (
    <div className={`overlay ${showName ? 'fade-in' : ''}`} style={{ backgroundColor: sketchie.background }}>
      <p className={`text-center ${isWhite ? 'black' : ''}`}>{sketchie.name}</p>
    </div>
  )
}

export default OverlayCard
