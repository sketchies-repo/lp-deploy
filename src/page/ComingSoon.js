import loadingGif from '../assets/loading.gif'

const ComingSoon = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={loadingGif} alt="Coming soon ... Stay connected" className="max-w-52 " />
    </div>
  )
}

export default ComingSoon
