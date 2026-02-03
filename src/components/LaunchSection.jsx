import { useEffect, useRef, useState } from 'react'
import launchBackground from '../assets/images/launch-section-bg.png'

function Rocket({ className, style }) {
  return (
    <div className={className} style={style} aria-hidden="true">
      <svg viewBox="0 0 80 160" className="w-full h-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]">
        <defs>
          <linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf4e7" />
            <stop offset="100%" stopColor="#cfa06c" />
          </linearGradient>
          <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe5a3" />
            <stop offset="50%" stopColor="#ffb44c" />
            <stop offset="100%" stopColor="#ff6a1a" />
          </linearGradient>
        </defs>
        <path d="M40 6 L58 34 L22 34 Z" fill="#f4c37f" />
        <rect x="24" y="30" width="32" height="86" rx="16" fill="url(#rocketBody)" />
        <rect x="30" y="48" width="20" height="36" rx="10" fill="#2b2b2b" opacity="0.3" />
        <circle cx="40" cy="62" r="10" fill="#2d2d2d" opacity="0.4" />
        <circle cx="40" cy="62" r="6" fill="#a6d3ff" />
        <path d="M24 84 L8 112 L24 112 Z" fill="#b7723f" />
        <path d="M56 84 L56 112 L72 112 Z" fill="#b7723f" />
        <path d="M40 110 C28 120 28 140 40 152 C52 140 52 120 40 110 Z" fill="url(#rocketFlame)" />
      </svg>
    </div>
  )
}

function LaunchSection() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId = null

    const updateProgress = () => {
      if (!sectionRef.current) {
        setProgress(0)
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const totalScroll = Math.max(rect.height - viewportHeight, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll)
      setProgress(scrolled / totalScroll)
    }

    const onScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        updateProgress()
        frameId = null
      })
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const rocketLift = (distance) => `translateY(${-progress * distance}px)`
  const rocketFade = (start) => Math.max(0, 1 - Math.max(0, progress - start) * 4)

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[240vh] sm:min-h-[260vh] md:min-h-[280vh] bg-[#0f0d0c]"
      style={{
        backgroundImage: `url(${launchBackground})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="sticky top-0 min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Rocket
            className="absolute left-[8%] sm:left-[12%] md:left-[16%] bottom-[-50px] sm:bottom-[-60px] md:bottom-[-70px] h-[120px] sm:h-[150px] md:h-[180px] w-[60px] sm:w-[75px] md:w-[90px]"
            style={{
              transform: rocketLift(480),
              opacity: rocketFade(0.65),
            }}
          />
          <Rocket
            className="absolute left-1/2 bottom-[-70px] sm:bottom-[-80px] md:bottom-[-90px] h-[170px] sm:h-[210px] md:h-[250px] w-[82px] sm:w-[100px] md:w-[120px]"
            style={{
              transform: `translateX(-50%) ${rocketLift(640)}`,
              opacity: rocketFade(0.6),
            }}
          />
          <Rocket
            className="absolute right-[8%] sm:right-[12%] md:right-[16%] bottom-[-45px] sm:bottom-[-55px] md:bottom-[-60px] h-[115px] sm:h-[140px] md:h-[170px] w-[58px] sm:w-[70px] md:w-[85px]"
            style={{
              transform: rocketLift(440),
              opacity: rocketFade(0.7),
            }}
          />
        </div>

        <div className="relative z-10 h-full flex items-start justify-center px-4 sm:px-6">
          <div className="w-full max-w-6xl mx-auto lg:mt-[24vh] sm:mt-[5vh] ">
            <div className="bg-black/30 backdrop-blur-[1px] rounded-3xl px-5 sm:px-8 py-8 sm:py-10 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-robot-dreamer text-primary-cream font-bold">
                    WHAT IS SUTURE THE FUTURE?
                  </h2>
                  <p className="text-sm md:text-base font-dm-sans text-primary-white leading-relaxed font-bold">
                    Suture the Future is a one-day interstellar innovation
                    challenge hosted by the Global Surgery Student Alliance at
                    Texas A&M University, bringing students together to create
                    impactful surgical solutions.
                  </p>
                  <p className="text-sm md:text-base font-dm-sans text-primary-white leading-relaxed font-bold">
                    Participants will work in teams and attend hands-on
                    workshops with industry professionals. The event concludes
                    with presentations evaluated by a panel of experts, fostering
                    professional growth and meaningful networking
                    opportunities.
                  </p>
                </div>

                <div className="hidden md:flex justify-center">
                  <div className="w-px bg-primary-cream/60" />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-robot-dreamer text-primary-cream font-bold">
                    EVENT INFORMATION
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <u className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        Location
                      </u>
                      <p className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        ILCB*
                      </p>
                      <p className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        *Room TBD based on number of participants
                      </p>
                    </div>

                    <div>
                      <u className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        Parking
                      </u>
                      <p className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        Free with any valid TAMU permit:
                      </p>
                      <p className="text-sm md:text-base font-dm-sans text-primary-white font-bold">
                        Lot 100, Lot 42, and Lot 20
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-dm-sans text-primary-white pt-2 font-bold">
                    Paid parking at Stallings Blvd Garage or University Center
                    Garage
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-primary-cream/30 rounded-3xl px-6 py-4 backdrop-blur-sm">
                <p className="text-xs md:text-sm font-dm-sans text-primary-white font-bold text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
                  <span className="font-dm-sans">Note:</span> The event is open
                  and free to all participants; however, GSSA members receive
                  priority during the application period. Membership is
                  available through the GSSA website by paying annual or semester
                  dues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaunchSection
