function Section1() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* First Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-hk-modular text-primary-cream font-bold">Our Vision</h2>
            <p className="text-base font-dm-sans text-primary-white leading-relaxed font-bold">
              We believe in creating innovative solutions that empower businesses to reach their full potential. Our platform combines cutting-edge technology with user-centric design to deliver exceptional results.
            </p>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-hk-modular text-primary-cream font-bold">Why Choose Us</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-hk-modular text-primary-cream font-bold">Feature One</h3>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  High-performance solutions tailored to your needs
                </p>
              </div>

              <div>
                <h3 className="text-xl font-hk-modular text-primary-cream font-bold">Feature Two</h3>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  24/7 dedicated customer support and guidance
                </p>
              </div>
            </div>

            <p className="text-base font-dm-sans text-primary-white pt-4 font-bold">
              Join thousands of satisfied customers worldwide
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-button-main border-2 border-button-shadow rounded-lg p-8 text-center">
          <p className="text-lg font-dm-sans text-black font-bold">
            <span className="font-hk-modular">Note:</span> Our platform is
            designed with security and scalability in mind. Start your free
            trial today and experience the difference.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1
