function Section1() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* First Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in creating innovative solutions that empower businesses to reach their full potential. Our platform combines cutting-edge technology with user-centric design to deliver exceptional results.
            </p>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Feature One</h3>
                <p className="text-gray-600">
                  High-performance solutions tailored to your needs
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Feature Two</h3>
                <p className="text-gray-600">
                  24/7 dedicated customer support and guidance
                </p>
              </div>
            </div>

            <p className="text-gray-700 pt-4">
              Join thousands of satisfied customers worldwide
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Note:</span> Our platform is
            designed with security and scalability in mind. Start your free
            trial today and experience the difference.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1
