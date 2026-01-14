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

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-hk-modular text-primary-cream mb-4 font-bold">Welcome to Our Platform</h1>
        <p className="text-2xl font-dm-sans text-primary-cream mb-8 font-bold">Transform your vision into reality</p>
        <button className="bg-button-main text-black px-8 py-3 rounded-lg font-hk-modular font-bold hover:bg-button-highlight transition shadow-lg hover:shadow-xl"
          style={{
            boxShadow: '0 4px 0 #B78140',
          }}
          onMouseEnter={(e) => e.target.style.boxShadow = '0 2px 0 #CF9A59'}
          onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 0 #B78140'}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default HeroSection
