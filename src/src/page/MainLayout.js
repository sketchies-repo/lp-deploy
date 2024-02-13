import React from 'react'
import scLogo from '../../assets/sketchies_logo.png'

const MainLayout = () => {
  return (
    <div className="header w-full flex justify-center p-5 py-20">
      <a className="w-2/6" href="/">
        <img src={scLogo} ></img>
      </a>
    </div>
  )
}

export default MainLayout
