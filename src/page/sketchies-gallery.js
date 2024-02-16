import React, { useState } from 'react'
import SketchieCard from '../components/sketchie-card'
import SKETCHIES from '../models/list-sketchies'

const SketchiesGallery = () => {

  const [sketchies] = useState(SKETCHIES)
  
  return (
    <div className='flex wrap w-6/12'>
      {sketchies.map((sketchie, index) => (
        <img key={index} src={sketchie.picture + sketchie.id} className='basis-1/3'></img>
      ))}
    </div>
  )
}

export default SketchiesGallery
