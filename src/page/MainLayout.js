import React from 'react'
import sketchiesLogo from '../assets/Logo_Header.png'
import ProjectDescription from '../components/project-description'
import SketchiesGallery from './sketchies-gallery'
import OneOneDescription from '../components/one-description'
import SocialNetworks from '../components/social-networks'

const MainLayout = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto max-2xl:px-5">
        <div className="header w-full flex justify-center p-5 py-20 max-md:py-10">
          <a className="w-3/4 max-w-4xl	" href="/">
            <img src={sketchiesLogo} alt="Sketchies Logo"></img>
          </a>
        </div>
        <ProjectDescription />
        <SketchiesGallery />
        <OneOneDescription />
        <SocialNetworks />
        <div className="footer flex justify-center p-5 pt-20 max-md:pt-10">
          <p className="text-white text-xs">© 2024 Sketchies</p>
        </div>
      </div>
    </>
  )
}

export default MainLayout
