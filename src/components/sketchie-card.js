import Sketchie from '../models/sketchie'

const SketchieCard = () => {
  const sketchie = this.props
  console.log(sketchie);
  return (
    <div className="sketchie-card">
      <img src={sketchie.picture} alt={sketchie.name} className="sketchie-picture" />
    </div>
  )

}

export default SketchieCard