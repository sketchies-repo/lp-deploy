import React, { useState } from 'react'
import OverlayCard from './OverlayCard'
import './sketchie-card.css'

export default function SketchieCard({ sketchie }) {
  const [showName, setShowName] = useState(false)

  const handleMouseEnter = () => {
    setShowName(true)
  }

  const handleMouseLeave = () => {
    setShowName(false)
  }

  return (
    <div
      className="container rounded-2xl max-md:rounded-lg relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OverlayCard sketchie={sketchie} showName={showName} />
      <img
        src={sketchie.picture + sketchie.id}
        alt={`NFT de ${sketchie.name}`}
        className={`rounded-2xl max-md:rounded-lg ${showName ? 'opacity-none' : ''}`}
      />
    </div>
  )
}
