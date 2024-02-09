import sketchiesGif from './assets/325.gif'
import discodeLogo from './assets/discord.png'
import twitter from './assets/twitter.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sketchies</h1>
        <img src={sketchiesGif} width="400px" className="" alt="1o1 Sketchies" />
        <p>
          Sketchies is a collection of pixel art PFP. They are made of pure pixels. Pixels are the smallest units of
          each Sketchies, and the concept revolves around these fundamental elements being pure and untainted. The
          essence of the artistic creation is found in the most basic and raw forms. Pixels and Sketchies make a perfect
          match. Sketchies owners are those who have found their true colors.
        </p>
        <div>
          <a href="https://discord.gg/NEHxs8ZDAn" target="_blank" rel="noopener noreferrer">
            <img src={discodeLogo} width="40px" alt="Discord de la communauté" />
          </a>
          <a href="https://twitter.com/SketchiesSOL" target="_blank" rel="noopener noreferrer">
            <img src={twitter} width="40px" alt="Twitter" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
