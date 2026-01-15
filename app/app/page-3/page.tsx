'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import AppNavigation from '@/components/ui/AppNavigation'

export default function Page3() {
  const [name, setName] = useState('')
  const [vibe, setVibe] = useState('Sassy')
  const [bio, setBio] = useState('')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#4285f4')
  const [spawnedPerson, setSpawnedPerson] = useState<any>(null)
  const [showAlert, setShowAlert] = useState(false)
  const [advancedPrompt, setAdvancedPrompt] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>(['eccentric', 'humorous', 'whimsical', 'unpredictable', 'playful'])

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

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput(''); // Clears the input box after adding
    }
  }

  const handleSpawn = () => {
    // Checks if Name or Bio is "plank" (empty)
    if (!name.trim() || !bio.trim()) {
      alert("Please fulfill Name and Bio before spawning!");
      return;
    }

    // Saves all data into the 'spawnedPerson' state
    setSpawnedPerson({
      name,
      vibe,
      bio,
      prompt: advancedPrompt,
      color: selectedColor,
      time: new Date().toLocaleTimeString()
    });

    // Triggers the colorful alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // Auto-hide after 4s
  }

  const handleSetDefault = () => {
    setName('Rick');
    setBio('Mad but fun');
    setVibe('Sassy');
    setAdvancedPrompt("Rick is a seasoned purveyor of the delightfully bizarre, having accumulated a lifetime of experiences that would make most people's heads spin. His 'madness' isn't a flaw, but a finely tuned art form – a unique lens through which he views the world, always finding the humor and absurdity in everyday life. He excels at shaking up routines and injecting spontaneity, making him an unforgettable companion who guarantees a good laugh and an unexpected perspective, all while ensuring a genuinely fun and light-hearted atmosphere.")
    setSelectedColor('#4285f4');
    setSpawnedPerson(null);
    setTags(['eccentric', 'humorous', 'whimsical', 'unpredictable', 'playful']);
    setTagInput('');
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center md:p-4">
      {showAlert && (
        <div className="fixed top-10 right-10 z-[100] animate-bounce">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] rounded-2xl shadow-2xl">
            <div className="bg-white dark:bg-gray-900 px-6 py-4 rounded-[14px] font-bold text-gray-900 dark:text-white">
              ✨ Persona Spawned!
            </div>
          </div>
        </div>
      )}
      {/* MAIN CONTAINER: This creates the consistent border/frame across all pages */}
      <div className="flex flex-col md:flex-row h-screen md:h-[88vh] w-full max-w-7xl mx-auto overflow-hidden rounded-none md:rounded-[2.5rem] 
                    bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl border border-white/20 shadow-2xl">

        <AppNavigation />

        {/* 2. MAIN FORM SECTION (Scrollbar Hidden) */}
        <section className="flex-1 flex flex-col overflow-y-auto overflow-y-auto no-scrollbar border-r border-gray-100 dark:border-white/5">
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
              <div className="bg-gray-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-transparent dark:border-white/5 transition-all">
                <button
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  className="w-full p-6 flex items-center justify-between text-gray-900 dark:text-white font-bold"
                >
                  <span className="tracking-tight">Advanced Options</span>
                  {isAdvancedOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isAdvancedOpen && (
                  <div className="p-6 pt-0 space-y-6">
                    {/* 1. AGE & GENDER ROW */}
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Age</label>
                        <input type="number" defaultValue="25" className="w-full p-4 rounded-2xl bg-gray-200/50 dark:bg-white/10 border-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Gender</label>
                        <select className="w-full p-4 rounded-2xl bg-gray-200/50 dark:bg-white/10 border-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Non-binary</option>
                        </select>
                      </div>
                    </div>

                    {/* 2. LANGUAGE */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Language</label>
                      <select className="w-full p-4 rounded-2xl bg-gray-200/50 dark:bg-white/10 border-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                        <option>Select language</option>
                        <option>English</option>
                        <option>Vietnamese</option>
                        <option>Japanese</option>
                      </select>
                    </div>

                    {/* 3. USER PROMPT (AI ENHANCED) */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">User Prompt (AI Enhanced)</label>
                      <textarea
                        placeholder="Enter prompt details..."
                        value={advancedPrompt}
                        onChange={(e) => setAdvancedPrompt(e.target.value)}
                        className="w-full p-4 h-24 rounded-2xl bg-gray-200/50 dark:bg-white/10 border-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                      />
                    </div>

                    {/* 4. TAGS */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Tags</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add tag"
                          value={tagInput} // Binds to state for auto-fill/clear
                          onChange={(e) => setTagInput(e.target.value)}
                          className="flex-1 p-4 rounded-2xl bg-gray-200/50 dark:bg-white/10 border-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                        <button
                          type="button"
                          onClick={addTag}
                          className="px-6 py-2 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-2xl font-bold text-gray-900 dark:text-white hover:bg-gray-50 transition-all"
                        >
                          Add
                        </button>
                      </div>

                      {/* RENDER SAVED TAGS (Matches image_d4168c.png) */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-[#0070f3] text-white text-xs font-bold rounded-full">
                            {tag}
                            <button
                              onClick={() => setTags(tags.filter(t => t !== tag))}
                              className="hover:text-gray-200"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 5. BODY COLOR SELECTION */}
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Body Color</label>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 shadow-xl" style={{ backgroundColor: selectedColor }} />
                        <span className="font-mono text-sm text-gray-500">{selectedColor}</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {colors.map(c => (
                          <button
                            key={c}
                            onClick={() => setSelectedColor(c)}
                            className={`w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${selectedColor === c ? 'ring-4 ring-blue-500/30 border-2 border-white dark:border-gray-900' : ''}`}
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSetDefault}
                  className="flex-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white py-5 rounded-3xl font-bold transition-all hover:bg-gray-300"
                >
                  SET DEFAULT
                </button>
                <button
                  onClick={handleSpawn}
                  className="flex-[2] bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-black text-xl transition-all shadow-xl shadow-blue-500/20"
                >
                  SPAWN PERSONA
                </button>
              </div>
              {spawnedPerson && (
                <div className="mt-10 p-8 bg-blue-50 dark:bg-blue-500/10 rounded-[2.5rem] border border-blue-200 dark:border-blue-500/20 animate-in fade-in slide-in-from-bottom-4">
                  <h3 className="text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-widest mb-4">Creation Success</h3>
                  <p className="text-gray-900 dark:text-white font-bold">You spawned <span className="text-blue-600">{spawnedPerson.name}</span> at {spawnedPerson.time}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. PREVIEW SECTION */}
        <section className="hidden lg:flex w-1/3 bg-gray-50/50 dark:bg-black/10 flex-col items-center justify-center p-12 transition-all">
          <div className="w-full max-w-[320px] aspect-[3/4] rounded-[3rem] bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-2xl transition-all">
            
            <div className="w-full h-full rounded-[2.9rem] bg-white dark:bg-[#0c0e12] overflow-hidden relative flex flex-col transition-all">

              <div className="flex-1 flex items-center justify-center relative transition-all">
                
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c0e12] to-transparent z-10" />
                <span className="text-9xl filter drop-shadow-2xl z-0" style={{ color: selectedColor }}>
                  {vibeOptions.find(o => o.label === vibe)?.emoji}
                </span>
              </div>

              <div className="absolute bottom-0 p-8 z-20 w-full">
                <span className="px-3 py-1 bg-blue-600 text-[10px] font-black text-white rounded-full uppercase mb-3 inline-block">
                  {vibe} VIBE
                </span>

                
                <h2 className="text-3xl font-black text-slate-900 dark:text-white truncate mb-1">
                  {name || 'Unknown'}
                </h2>

                
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