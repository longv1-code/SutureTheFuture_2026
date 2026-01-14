function HeroSection() {
  return (
    <div id="home" className="relative w-full h-screen mt-16 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://videos.pexels.com/video-files/3571137/3571137-sd_640_360_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-2xl mb-8">Transform your vision into reality</p>
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default HeroSection
