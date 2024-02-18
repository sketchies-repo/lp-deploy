import React, { useState, useEffect } from 'react'
import SketchieCard from '../components/sketchie-card'
import SKETCHIES from '../models/list-sketchies'

const SketchiesGallery = () => {
  const [sketchies, setSketchies] = useState([])

  useEffect(() => {
    setSketchies(SKETCHIES)
  }, [])

  return (
    <>
      <h2 className="text-4xl max-md:text-3xl text-white text-center uppercase my-14">The 1/1 club</h2>
      <div className="grid grid-cols-4 max-md:grid-cols-3 gap-5 max-md:gap-5">
        {sketchies.map(sketchie => (
          <SketchieCard key={sketchie.id} sketchie={sketchie} />
        ))}
      </div>
    </>
  )
}

export default SketchiesGallery
