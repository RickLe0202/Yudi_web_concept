"use client";

import { ChatRoom, chatRooms } from '@/lib/mockData'



export default function Portfolio() {
  // Taking the first 6 personas to create the exact grid from your image
  const displayRooms = chatRooms.slice(0, 6);

  return (
    <section id="portfolio" className="relative
    min-h-screen
    grid
    place-content-center
    overflow-hidden
    transition-colors duration-200
    mt-10 md:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching your screenshot */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular Personas
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click to start a private text conversation
          </p>
        </div>

        {/* 3-Column Grid for Desktop, 2 for Tablet, 1 for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRooms.map((persona : ChatRoom) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </div>
    </section>
  )
}


interface PersonaProps {
  persona: ChatRoom;
}

function PersonaCard({ persona }: PersonaProps ) {
  return (
    <div className="bg-white dark:bg-[#1E293B]/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-gray-200 dark:border-white/5 flex flex-col justify-between h-[340px] transition-all hover:shadow-lg dark:hover:bg-[#1E293B]/80 hover:scale-[1.02] group">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-500/80 flex items-center justify-center text-3xl shadow-lg">
            😊
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-xl">
              {persona.name}
            </h4>
            <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
              {persona.category}
            </p>
          </div>
        </div>
        
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed italic opacity-90">
          "{persona.description}"
        </p>
      </div>

      <div className="flex justify-end mt-4">
        <button className="px-7 py-2.5 bg-gray-100 dark:bg-[#2D3748] text-blue-600 dark:text-blue-300 rounded-2xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">
          Chat
        </button>
      </div>
    </div>
  )
}