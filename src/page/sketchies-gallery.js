import React, { useState } from 'react'
import SketchieCard from '../components/sketchie-card'
import SKETCHIES from '../models/list-sketchies'

const SketchiesGallery = () => {
  const [sketchies] = useState(SKETCHIES)

  return (
    <>
      <h2 className="text-6xl text-white text-center uppercase my-20">The 1/1 club</h2>
      <div className="grid grid-cols-4 gap-8">
        {sketchies.map((sketchie, index) => (
          <img key={index} src={sketchie.picture + sketchie.id} className="rounded-3xl"></img>
        ))}
      </div>
    </>
  )
}

export default SketchiesGallery
