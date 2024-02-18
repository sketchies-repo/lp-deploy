import DiscordLogo from '../assets/Discord.png'
import ExchangeLogo from '../assets/Exchange_art.png'
import MELogo from '../assets/ME.png'
import TensorLogo from '../assets/Tensor.png'
import TwitterLogo from '../assets/Twitter.png'

const linkTwitter = 'https://twitter.com/SketchiesSOL'
const linkDiscord = 'https://discord.gg/tkG8342tFx'
const linkME = 'https://magiceden.io/marketplace/sketchies'
const linkTensor = 'https://www.tensor.trade/trade/sketchies'
const linkExchange = 'https://exchange.art/sketchies/nfts'

const SocialNetworks = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 max-md:gap-3">
        <a href={linkTwitter} target="_blank">
          <img src={TwitterLogo} alt="Lien vers notre compte X" className="w-16 max-md:max-w-12" />
        </a>
        <a href={linkDiscord} target="_blank">
          <img src={DiscordLogo} alt="Lien vers notre Discord" className="w-16 max-md:max-w-12" />
        </a>
        <a href={linkTensor} target="_blank">
          <img src={TensorLogo} alt="Lien vers les Sketchies sur Tensor" className="w-16 max-md:max-w-12" />
        </a>
        <a href={linkME} target="_blank">
          <img src={MELogo} alt="Lien vers les Sketchies sur Magic Eden" className="w-16 max-md:max-w-12" />
        </a>
        <a href={linkExchange} target="_blank">
          <img src={ExchangeLogo} alt="Lien vers notre Exchange.art" className="w-16 max-md:max-w-12" />
        </a>
      </div>
    </>
  )
}

export default SocialNetworks
