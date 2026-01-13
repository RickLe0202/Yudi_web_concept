'use client'
import { chatRooms } from '@/lib/mockData'
import Link from 'next/link'

export default function ExplorePersona() {
  return (
    <div className="flex h-[88vh] w-full max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] 
                    bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl border border-white/20 shadow-2xl">
      
      {/* 1. LEFT MINI SIDEBAR */}
      <aside className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-8 bg-white/20 dark:bg-black/20">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">Y</div>
        <nav className="flex flex-col gap-6 mt-4">
          <Link href="/app/page-1" className="p-3 rounded-xl hover:bg-white/10 transition-all text-xl opacity-50">💬</Link>
          <button className="p-3 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-xl">🧭</button>
          <Link href="/app/page-3" className="p-3 rounded-xl hover:bg-white/10 transition-all text-xl opacity-50">✨</Link>
          <button className="p-3 rounded-xl hover:bg-white/10 transition-all text-xl mt-auto opacity-50">⚙️</button>
        </nav>
      </aside>

      {/* 2. EXPLORE CONTENT AREA */}
      <section className="flex-1 flex flex-col bg-white/10 dark:bg-black/5 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-white/10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter italic">Explore Personas</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Discover AI spirits created by the community.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-2 rounded-full bg-white/20 border border-white/20 text-sm font-bold dark:text-white">Trending</div>
             <div className="px-6 py-2 rounded-full bg-transparent border border-white/10 text-sm font-bold text-gray-500">Newest</div>
          </div>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatRooms.map((room) => (
              <div
                key={room.id}
                className="group relative bg-white/40 dark:bg-white/5 rounded-[2.5rem] border border-white/20 overflow-hidden hover:border-purple-500/50 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500 flex flex-col shadow-xl hover:shadow-purple-500/10"
              >
                {/* Visual Header / Avatar Area */}
                <div className="h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-700">🤖</span>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                      {room.name}
                    </h2>
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium line-clamp-2 mb-6">
                    {room.description || "A unique AI persona ready to vibe and chat with you."}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                      {room.memberCount} VIBING
                    </span>
                    <button className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-xs uppercase hover:scale-105 transition-transform">
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}