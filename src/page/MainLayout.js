import React from 'react'
import sketchiesLogo from '../assets/Logo_Header.png'
import ProjectDescription from '../components/ProjectDescription'

const MainLayout = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="header w-full flex justify-center p-5 py-20">
          <a className="w-2/6" href="/">
            <img src={sketchiesLogo}></img>
          </a>
        </div>
        <ProjectDescription />
      </div>
    </>
  )
}

export default MainLayout
