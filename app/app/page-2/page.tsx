import { chatRooms } from '@/lib/mockData'
import Link from 'next/link'

export default function Page2() {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/app"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to App
        </Link>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Chat Rooms</h1>
        <p className="text-xl text-gray-600">
          Discover and join public chat rooms and communities
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chatRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative">
              <div className="absolute top-4 right-4">
                {room.isPrivate ? (
                  <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    Private
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-green-500/90 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    Public
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-primary-600 font-medium">
                  {room.category}
                </span>
                <span className="text-sm text-gray-500">
                  {room.memberCount} members
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {room.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Join Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

