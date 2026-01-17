import HeroVideo from '../assets/videos/HeroVideo.mp4'
import { useRef, useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

function HeroSection() {
  const [titleWidth, setTitleWidth] = useState(0)
  const titleRef = useRef()
  const expiryTimestamp = new Date('2026-04-11T00:00:00')
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    interval: 20,
  })

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [])

  return (
    <div id="home" className="relative w-full min-h-screen md:h-[110vh] mt-0 md:mt-8 overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"
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
      <div className="relative z-10 h-full flex flex-col justify-start items-center md:items-start pt-28 md:pt-32 px-6 md:pl-64">
        <div className="inline-block w-full max-w-[600px]">
          {/* Main Title */}
          <div className="w-full flex justify-center mb-6 md:mb-8">
            <div className="text-center inline-block">
              <h1 className="pl-0 md:pl-5 text-5xl sm:text-6xl md:text-8xl font-robot-dreamer text-primary-cream font-bold leading-none">
                SUTURE
              </h1>
              
              {/* The with lines */}
              <div className="flex items-center gap-3 sm:gap-4 my-1">
                <div className="flex-grow h-0.5 bg-primary-white"></div>
                <span className="text-xl sm:text-2xl md:text-3xl font-robot-dreamer text-primary-white font-bold whitespace-nowrap">T H E</span>
                <div className="flex-grow h-0.5 bg-primary-white"></div>
              </div>
              
              <h1 ref={titleRef} className="pl-0 md:pl-5 text-5xl sm:text-6xl md:text-8xl font-robot-dreamer text-primary-cream font-bold leading-none">
                FUTURE
              </h1>
            </div>
          </div>

          {/* Event Details */}
          <p className="text-sm sm:text-base md:text-lg font-dm-sans text-primary-white mb-5 md:mb-6 text-center">
            April 11, 2026 @ Texas A&M University
          </p>

          {/* Mission Status Box */}
          <div className="bg-primary-cream bg-opacity-40 rounded-3xl px-4 sm:px-6 py-4 backdrop-blur-sm">
            <p className="text-xs sm:text-sm md:text-base font-dm-sans text-primary-white font-bold text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
              Mission Status: GSSA Member Applications Open January 20
            </p>
          </div>
          <div className="rounded-3xl mt-8 md:mt-10 border border-[#b59f91] bg-gradient-to-b from-[#b9a598] via-[#9d887b] to-[#0f0d0c] px-4 sm:px-6 py-4 text-primary-cream shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <p className="text-center font-hk-modular text-sm sm:text-base md:text-xl tracking-widest">
              COUNTDOWN TO APRIL 11, 2026
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center font-dm-sans text-xs sm:text-sm md:text-base">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{days}</div>
                <div className="uppercase tracking-widest">Days</div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl">:</div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{hours}</div>
                <div className="uppercase tracking-widest">Hours</div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl">:</div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{minutes}</div>
                <div className="uppercase tracking-widest">Minutes</div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl">:</div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{seconds}</div>
                <div className="uppercase tracking-widest">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection