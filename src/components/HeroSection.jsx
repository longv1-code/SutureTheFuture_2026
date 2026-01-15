import HeroVideo from '../assets/videos/HeroVideo.mp4'

function HeroSection() {
  return (
    <div id="home" className="relative w-full h-screen mt-16 overflow-hidden">
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
        <div className="w-96">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-8xl font-robot-dreamer text-primary-cream font-bold leading-tight">
              SUTURE
            </h1>
            
            {/* The with lines */}
            <div className="flex items-center gap-4 my-0">
              <div className="flex-grow h-0.5 bg-primary-white"></div>
              <span className="text-3xl font-robot-dreamer text-primary-white font-bold whitespace-nowrap">THE</span>
              <div className="flex-grow h-0.5 bg-primary-white"></div>
            </div>
            
            <h1 className="text-8xl font-robot-dreamer text-primary-cream font-bold leading-tight">
              FUTURE
            </h1>
          </div>

          {/* Event Details */}
          <p className="text-lg font-dm-sans text-primary-white mb-6">
            April 11, 2026 @ Texas A&M University
          </p>

          {/* Mission Status Box */}
          <div className="bg-white bg-opacity-10 border border-primary-cream rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-dm-sans text-primary-white font-bold">
              🚀 Mission Status: Accepting GSSA Member Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection