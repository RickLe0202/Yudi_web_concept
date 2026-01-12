export default function About() {
  return (
    <section id="about" className="  relative
    min-h-screen
    grid
    place-content-center
    overflow-hidden
    transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Yudi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Revolutionizing the way people communicate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Your Modern Chat Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Yudi is a cutting-edge chat application designed for individuals and teams
              who value seamless communication. Built with modern technologies, Yudi
              provides real-time messaging, secure encryption, and an intuitive interface
              that works across all your devices.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're coordinating with your team, staying in touch with friends,
              or building communities, Yudi makes communication simple, fast, and secure.
              Experience the future of messaging today.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Real-time', 'Secure', 'Cross-platform', 'Group Chats', 'File Sharing', 'Video Calls'].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

