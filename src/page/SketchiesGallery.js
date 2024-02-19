import React, { useState, useEffect } from 'react'
import SketchieCard from '../components/SketchieCard'
import SKETCHIES from '../models/ListSketchies'
import './sketchies-gallery.css'

export default function SketchiesGallery() {
  const [sketchies, setSketchies] = useState([])

  useEffect(() => {
    setSketchies(SKETCHIES)
  }, [])

  return (
    <>
      <h2 className="title-1o1 text-4xl max-md:text-2xl text-white text-center uppercase my-14 max-md:my-10">
        The 1/1 club
      </h2>
      <div className="grid grid-cols-4 max-md:grid-cols-3 gap-5 max-md:gap-3">
        {sketchies.map(sketchie => (
          <SketchieCard key={sketchie.id} sketchie={sketchie} />
        ))}
      </div>
    </>
  )
}
