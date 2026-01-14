function Section2() {
  const faqs = [
    {
      title: 'Getting Started',
      text: 'Learn how to set up your account and start using our platform',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Pricing Plans',
      text: 'Explore our flexible pricing options suited for all business sizes',
      image:
        'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Integration',
      text: 'Seamlessly integrate with your favorite third-party tools',
      image:
        'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Security',
      text: 'Your data is protected with industry-leading encryption standards',
      image:
        'https://images.pexels.com/photos/60504/security-lock-password-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Support',
      text: 'Get help from our expert support team anytime you need',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Performance',
      text: 'Optimize your workflow with our powerful analytics dashboard',
      image:
        'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Updates',
      text: 'Stay informed about new features and platform improvements',
      image:
        'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Training',
      text: 'Access comprehensive resources and training materials',
      image:
        'https://images.pexels.com/photos/60504/security-lock-password-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Community',
      text: 'Connect with other users and share best practices',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ]

  return (
    <section id="faq" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={faq.image}
                  alt={faq.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {faq.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Tips */}
        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">💡 Tip:</span> To adjust individual
            box heights, modify the <code className="bg-gray-200 px-2 py-1 rounded text-xs">
              h-48
            </code>{' '}
            class on the image container (h-40, h-56, etc.) or add{' '}
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">
              min-h-[XXXpx]
            </code>{' '}
            to the text container div. You can also use{' '}
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">
              lg:col-span-2
            </code>{' '}
            to make specific boxes wider.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section2
