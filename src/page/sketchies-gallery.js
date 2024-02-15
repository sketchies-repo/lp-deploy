import SketchieCard from '../components/sketchie-card'
import SKETCHIES from '../models/list-sketchies'

const SketchiesGallery = () => {
  return (
      <div className="sketchies-gallery">
        <h1 className='text-white'>LISTE SKECTHIES</h1>
        {SKETCHIES.map(sketchie => (
          <img key={sketchie.id} sketchie={sketchie}/>
        ))}
      </div>
  )
}

export default SketchiesGallery
