'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function Page3() {
  const [name, setName] = useState('')
  const [vibe, setVibe] = useState('Sassy')
  const [bio, setBio] = useState('')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#4285f4')

  const vibeOptions = [
    { label: 'Chill', emoji: '🌊' },
    { label: 'Hype', emoji: '🔥' },
    { label: 'Smart', emoji: '🧠' },
    { label: 'Sassy', emoji: '💅' },
  ]

  const colors = [
    '#4285f4', '#ea4335', '#fbbc05', '#34a853', '#ff6d01',
    '#f43f5e', '#a855f7', '#22d3ee', '#fb7185', '#ff8a65',
    '#ffb74d', '#81c784'
  ]

  return (
    <div className="flex items-center justify-center min-h-[90vh] p-4 lg:p-8">
      {/* MAIN CONTAINER: This creates the consistent border/frame across all pages */}
      <div className="flex h-[85vh] w-full max-w-[1400px] border border-gray-200 dark:border-white/10 rounded-[2.5rem] bg-white dark:bg-[#0c0e12] overflow-hidden shadow-2xl transition-all">

        {/* 1. LEFT MINI SIDEBAR */}
        <aside className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-8 bg-white/20 dark:bg-black/20 transition-all">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">Y</div>
          <nav className="flex flex-col gap-6 mt-4">
            <Link href="/app/page-1" className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-xl opacity-50">💬</Link>
            <Link href="/app/page-2" className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200  text-xl opacity-50">🧭</Link>
            <button className="p-3 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20">✨</button>
            <button className="p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-xl mt-auto opacity-50">⚙️</button>
          </nav>
        </aside>

        {/* 2. MAIN FORM SECTION (Scrollbar Hidden) */}
        <section className="flex-1 flex flex-col overflow-y-auto no-scrollbar border-r border-gray-100 dark:border-white/5">
          <div className="p-10 max-w-2xl">
            <header className="mb-10">
              <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter italic leading-none">CREATE PERSONA</h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">Configure your AI companion's personality and soul.</p>
            </header>

            <div className="space-y-8">
              {/* Persona Name */}
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">PERSONA NAME</label>
                <input
                  type="text"
                  placeholder="What's their name?"
                  className="w-full bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Vibe Selection */}
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">SELECT VIBE</label>
                <div className="grid grid-cols-2 gap-4">
                  {vibeOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setVibe(opt.label)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200
                        ${vibe === opt.label
                          ? 'bg-blue-600 border-blue-400 text-white shadow-lg scale-[1.02]'
                          : 'bg-gray-100 dark:bg-white/5 border-transparent dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}
                    >
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="font-bold">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">INSTRUCTIONS & BIO</label>
                <textarea
                  placeholder="How should they talk? What do they love?"
                  className="w-full bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-2xl px-6 py-4 h-32 outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              {/* ADVANCED OPTIONS ACCORDION */}
              <div className="bg-gray-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-transparent dark:border-white/5">
                <button
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  className="w-full p-6 flex items-center justify-between text-gray-900 dark:text-white font-bold"
                >
                  <span className="tracking-tight">Advanced Options</span>
                  {isAdvancedOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isAdvancedOpen && (
                  <div className="p-6 pt-0 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-2">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">AGE</label>
                        <input type="number" defaultValue="25" className="w-full p-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">GENDER</label>
                        <select className="w-full p-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Non-binary</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">BODY COLOR</label>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-800 shadow-md" style={{ backgroundColor: selectedColor }} />
                        <span className="font-mono text-xs text-gray-500">{selectedColor}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {colors.map(c => (
                          <button
                            key={c}
                            onClick={() => setSelectedColor(c)}
                            className={`w-8 h-8 rounded-lg transition-transform duration-200 hover:scale-110 ${selectedColor === c ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-[#0c0e12]' : ''}`}
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-black text-xl transition-all duration-200 active:scale-[0.98] shadow-xl shadow-blue-500/20">
                SPAWN PERSONA
              </button>
            </div>
          </div>
        </section>

        {/* 3. PREVIEW SECTION */}
        <section className="hidden lg:flex w-1/3 bg-gray-50/50 dark:bg-black/10 flex-col items-center justify-center p-12 transition-all">
          <div className="w-full max-w-[320px] aspect-[3/4] rounded-[3rem] bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-2xl transition-all">
            {/* Changed bg-[#0c0e12] to bg-white for light mode */}
            <div className="w-full h-full rounded-[2.9rem] bg-white dark:bg-[#0c0e12] overflow-hidden relative flex flex-col transition-all">

              <div className="flex-1 flex items-center justify-center relative transition-all">
                {/* Changed from-[#0c0e12] to from-white for light mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c0e12] to-transparent z-10" />
                <span className="text-9xl filter drop-shadow-2xl z-0" style={{ color: selectedColor }}>
                  {vibeOptions.find(o => o.label === vibe)?.emoji}
                </span>
              </div>

              <div className="absolute bottom-0 p-8 z-20 w-full">
                <span className="px-3 py-1 bg-blue-600 text-[10px] font-black text-white rounded-full uppercase mb-3 inline-block">
                  {vibe} VIBE
                </span>

                {/* Changed text-white to text-slate-900 for light mode */}
                <h2 className="text-3xl font-black text-slate-900 dark:text-white truncate mb-1">
                  {name || 'Unknown'}
                </h2>

                {/* Changed text-gray-400 to text-slate-500 for light mode */}
                <p className="text-slate-500 dark:text-gray-400 text-xs line-clamp-2 leading-relaxed font-medium">
                  {bio || 'Ready to start a new journey...'}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] opacity-50">LIVE PREVIEW</p>
        </section>
      </div>
    </div>
  )
}