import Link from 'next/link'

export default function AppHome() {
  const appPages = [
    {
      title: 'Conversations',
      href: '/app/page-1',
      description: 'View all your conversations and direct messages',
      icon: '💬',
    },
    {
      title: 'Chat Rooms',
      href: '/app/page-2',
      description: 'Browse and join public chat rooms and communities',
      icon: '🏠',
    },
    {
      title: 'Messages',
      href: '/app/page-3',
      description: 'View message history in a structured format',
      icon: '📨',
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Yudi App
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore conversations, chat rooms, and messages
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {appPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{page.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{page.title}</h2>
            <p className="text-gray-600">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

