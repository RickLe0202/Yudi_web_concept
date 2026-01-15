'use client'
import { useState, useEffect } from 'react'
import { conversations, users } from '@/lib/mockData'
import AppNavigation from '@/components/ui/AppNavigation'
import Link from 'next/link'

interface LocalMessage {
  id: number;
  sender: 'me' | 'bot';
  text: string;
}

export default function Page1() {
  // Set to null by default so it shows the "Options" view initially
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false); // Track bot loading state
  const [chatHistory, setChatHistory] = useState<LocalMessage[]>([
    { id: 1, sender: 'bot', text: 'Hello! How can I help you today?' }
  ])
  const [isCalling, setIsCalling] = useState(false)

  const activeChat = conversations.find(c => c.id === selectedChatId)

  // 1. WATCH FOR CHAT CHANGES
  useEffect(() => {
    // This resets the chat to the initial greeting whenever you click a new person
    setChatHistory([
      { id: 1, sender: 'bot', text: `Hello! I am ${activeChat?.name || 'your AI'}. How can I help you today?` }
    ]);
    setIsTyping(false);
    setInputText('');
  }, [selectedChatId]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add my message
    const myMsg: LocalMessage = { id: Date.now(), sender: 'me', text: inputText };
    setChatHistory(prev => [...prev, myMsg]);
    setInputText('');
    setIsTyping(true);

    // Simple delay for UI testing
    setTimeout(() => {
      const botMsg: LocalMessage = { id: Date.now() + 1, sender: 'bot', text: `Nice to see you! I'm ${activeChat?.name}. What else is on your mind?` };
      setChatHistory(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 2000);
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center md:p-4">
      <div className="flex flex-col md:flex-row h-screen md:h-[88vh] w-full max-w-7xl mx-auto overflow-hidden rounded-none md:rounded-[2.5rem] 
                    bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl border border-white/20 shadow-2xl">

        <AppNavigation />

        {/* 2. CHAT LIST COLUMN */}
        <section className={`${selectedChatId ? 'hidden md:flex' : 'flex'} w-full md:w-80 lg:w-96 border-r border-white/10 flex-col bg-white/10 dark:bg-black/5`}>
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
                <button
                  onClick={() => setIsCalling(true)}
                  className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold hover:bg-white/20 transition-all"
                >
                  Voice Call
                </button>
              </header>
              {isCalling ? (
                /* --- CALLING SCREEN VIEW --- */
                <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-blue-600/10 p-8">
                  <div className="relative">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-[3rem] bg-blue-500 animate-ping opacity-20" />
                    <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-tr from-blue-400 to-purple-500 shadow-2xl flex items-center justify-center text-6xl relative z-10">
                      {/* You can use activeChat.avatar if you have it */}
                      👤
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-8 text-gray-900 dark:text-white">{activeChat.name}</h2>
                  <p className="text-blue-500 font-medium mt-2 animate-pulse uppercase tracking-[0.2em]">Calling...</p>

                  {/* Call Controls */}
                  <div className="flex gap-6 mt-16">
                    <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl hover:bg-white/20 transition-all">🔇</button>
                    <button
                      onClick={() => setIsCalling(false)}
                      className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-xl shadow-lg shadow-red-500/40 hover:scale-110 transition-all"
                    >
                      📞
                    </button>
                    <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl hover:bg-white/20 transition-all">🔊</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1 p-8 overflow-y-auto space-y-6">
                    {chatHistory.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] p-5 rounded-[2rem] shadow-xl border border-white/20 
                      ${msg.sender === 'me'
                            ? 'bg-blue-600 text-white rounded-tr-none'
                            : 'bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-none'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {/* Add the loading indicator */}
                    {isTyping && activeChat && (
                      <div className="flex justify-start items-center gap-2">
                        {/* Small pulse icon */}
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                          {activeChat.name} is typing...
                        </p>
                      </div>
                    )}
                  </div>
                  <footer className="p-6">
                    <div className="flex gap-3 bg-white/40 dark:bg-white/5 rounded-[2rem] border border-white/20 p-2 pl-6 backdrop-blur-xl">
                      <input
                        type="text"
                        placeholder="Type your message here..."
                        value={inputText} // <--- LINK STATE
                        onChange={(e) => setInputText(e.target.value)} // <--- UPDATE STATE
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()} // <--- SEND ON ENTER
                        className="flex-1 bg-transparent py-3 outline-none text-gray-900 dark:text-white placeholder-gray-500"
                      />
                      <button
                        onClick={handleSend} // <--- LINK FUNCTION
                        className="bg-blue-600 text-white px-8 py-3 rounded-[1.5rem] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
                      >
                        Send
                      </button>
                    </div>
                  </footer>
                </>
              )}
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