'use client'
import { useState } from 'react'
import { conversations, users } from '@/lib/mockData'
import AppNavigation from '@/components/ui/AppNavigation'
import Link from 'next/link'

export default function Page1() {
  // Set to null by default so it shows the "Options" view initially
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const activeChat = conversations.find(c => c.id === selectedChatId)

  return (
    <div className="min-h-screen w-full flex items-center justify-center md:p-4">
    <div className="flex flex-col md:flex-row h-screen md:h-[88vh] w-full max-w-7xl mx-auto overflow-hidden rounded-none md:rounded-[2.5rem] 
                    bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl border border-white/20 shadow-2xl">

      <AppNavigation/>

      {/* 2. CHAT LIST COLUMN */}
      <section className={`${selectedChatId ? 'hidden' : 'flex'} w-full md:w-80 lg:w-96 border-r border-white/10 flex-col bg-white/10 dark:bg-black/5`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white uppercase tracking-tight">YUDI</h2>
          <div className="relative group">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-white/40 dark:bg-white/5 border border-white/20 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-4 top-3.5 opacity-40">🔍</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-2">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`group p-4 cursor-pointer transition-all rounded-2xl flex gap-4 items-center
                ${selectedChatId === chat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'hover:bg-white/30 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300'}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-400 to-purple-500 flex-shrink-0 shadow-md ${selectedChatId === chat.id ? 'ring-2 ring-white/50' : ''}`} />
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold truncate">{chat.name}</h3>
                  <span className={`text-[10px] uppercase font-medium ${selectedChatId === chat.id ? 'text-white/70' : 'text-gray-400'}`}>12:45 PM</span>
                </div>
                <p className={`text-sm truncate ${selectedChatId === chat.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {chat.lastMessage?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONTENT AREA (Conditional) */}
      <main className={`${!selectedChatId ? 'hidden' : 'flex'} md:flex flex-1 flex flex-col relative overflow-hidden`}>
        {activeChat ? (
          /* ACTIVE CHAT VIEW */
          <>
            <header className="p-6 border-b border-white/10 flex items-center justify-between backdrop-blur-md bg-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedChatId(null)}
                  className="md:hidden p-2 -ml-2 text-2xl"
                >
                  ⬅️
                </button>
                <div className="w-12 h-12 rounded-2xl bg-blue-500" />
                <div>
                  <h2 className="font-bold text-xl text-gray-900 dark:text-white">{activeChat.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-xs text-green-500 font-bold uppercase tracking-widest">Online</p>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold hover:bg-white/20 transition-all">
                Voice Call
              </button>
            </header>

            <div className="flex-1 p-8 overflow-y-auto space-y-6">
              {/* Mock Message Bubbles */}
              <div className="flex justify-start">
                <div className="max-w-[70%] p-5 rounded-[2rem] rounded-tl-none bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-xl border border-white/20">
                  {activeChat.lastMessage?.content}
                </div>
              </div>
            </div>

            <footer className="p-6">
              <div className="flex gap-3 bg-white/40 dark:bg-white/5 rounded-[2rem] border border-white/20 p-2 pl-6 backdrop-blur-xl">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent py-3 outline-none text-gray-900 dark:text-white placeholder-gray-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-[1.5rem] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                  Send
                </button>
              </div>
            </footer>
          </>
        ) : (
          /* EMPTY STATE: OPTIONS VIEW */
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
              Welcome to Yudi
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-sm">
              Select a chat to start messaging, or create your own AI persona to vibe with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              {/* Option: Create */}
              <Link href="/app/page-3" className="group p-8 rounded-[3rem] bg-white/40 dark:bg-white/5 border border-white/20 hover:border-blue-500/50 hover:bg-white/60 transition-all text-left">
                <div className="w-16 h-16 bg-blue-500 rounded-[1.5rem] flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">✨</div>
                <h3 className="text-2xl font-bold mb-2">Create Persona</h3>
                <p className="text-sm text-gray-500">Design an AI that speaks your vibe and matches your energy.</p>
              </Link>

              {/* Option: Explore */}
              <Link href="/app/page-2" className="group p-8 rounded-[3rem] bg-white/40 dark:bg-white/5 border border-white/20 hover:border-purple-500/50 hover:bg-white/60 transition-all text-left">
                <div className="w-16 h-16 bg-purple-500 rounded-[1.5rem] flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">🧭</div>
                <h3 className="text-2xl font-bold mb-2">Explore Persona</h3>
                <p className="text-sm text-gray-500">Discover and chat with personas created by the community.</p>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
    </div>
  )
}