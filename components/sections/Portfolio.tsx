import { chatRooms } from '@/lib/mockData'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative
    min-h-screen
    grid
    place-content-center
    overflow-hidden
    transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Popular Chat Rooms
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join communities and start conversations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    Join Room
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">
                  {room.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {room.memberCount} members
                  </span>
                  {room.isPrivate ? (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs font-medium">
                      Private
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Public
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

