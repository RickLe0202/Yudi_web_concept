import { conversations, users } from '@/lib/mockData'
import Link from 'next/link'

export default function Page1() {
  const getUserName = (userId: string) => {
    const user = users.find(u => u.id === userId)
    return user?.name || 'Unknown User'
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Conversations</h1>
        <p className="text-xl text-gray-600">
          Your active conversations and direct messages
        </p>
      </div>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  {conversation.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-900">{conversation.name}</h2>
                    {conversation.type === 'group' && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        Group
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {conversation.participants.length} {conversation.participants.length === 1 ? 'participant' : 'participants'}
                  </p>
                </div>
              </div>
              {conversation.unreadCount > 0 && (
                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                  {conversation.unreadCount}
                </span>
              )}
            </div>
            {conversation.lastMessage && (
              <div className="ml-16">
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">{getUserName(conversation.lastMessage.senderId)}: </span>
                  {conversation.lastMessage.content}
                </p>
                <p className="text-sm text-gray-500">
                  {formatTime(conversation.lastMessage.timestamp)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

