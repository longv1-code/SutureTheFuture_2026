import HeroVideo from '../assets/videos/HeroVideo.mp4'
import { useRef, useEffect, useState } from 'react'

function HeroSection() {
  const [titleWidth, setTitleWidth] = useState(0)
  const titleRef = useRef()

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [])

  return (
    <div id="home" className="relative w-full h-screen mt-8 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="HeroVideo"
        autoPlay
        muted
        loop
      >
        <source
          src={HeroVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Text Content - Right Aligned with Fixed Width */}
      <div className="relative z-10 h-full flex flex-col justify-start items-start pt-32 pl-64">
        <div className="inline-block max-w-[600px]">
          {/* Main Title */}
          <div className="w-full flex justify-center mb-8">
            <div className="text-center inline-block">
              <h1 className="text-8xl font-robot-dreamer text-primary-cream font-bold leading-none">
                SUTURE
              </h1>
              
              {/* The with lines */}
              <div className="flex items-center gap-4 my-0">
                <div className="flex-grow h-0.5 bg-primary-white"></div>
                <span className="text-3xl font-robot-dreamer text-primary-white font-bold whitespace-nowrap">T H E</span>
                <div className="flex-grow h-0.5 bg-primary-white"></div>
              </div>
              
              <h1 ref={titleRef} className="text-8xl font-robot-dreamer text-primary-cream font-bold leading-none">
                FUTURE
              </h1>
            </div>
          </div>

          {/* Event Details */}
          <p className="text-lg font-dm-sans text-primary-white mb-6 text-center">
            April 11, 2026 @ Texas A&M University
          </p>

          {/* Mission Status Box */}
          <div className="bg-primary-cream bg-opacity-40 rounded-3xl px-6 py-4 backdrop-blur-sm">
            <p className="text-s font-dm-sans text-primary-white font-bold text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
              🚀 Mission Status: GSSA Member Applications Open January 20
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection