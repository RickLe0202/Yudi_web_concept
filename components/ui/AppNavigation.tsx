// components/AppNavigation.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../utils/ThemeToggle'

export default function AppNavigation() {
  const pathname = usePathname()
  
  const activeClass = (path: string) => 
    pathname === path 
      ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20" 
      : "hover:bg-white/10 text-gray-500"

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-20 border-r border-white/10 flex-col items-center py-8 gap-8 bg-white/20 dark:bg-black/20 shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30">Y</div>
        
        <nav className="flex flex-col gap-6 mt-4 flex-1 items-center">
          <Link href="/app/page-1" className={`p-3 rounded-xl transition-all text-xl ${activeClass('/app/page-1')}`}>💬</Link>
          <Link href="/app/page-2" className={`p-3 rounded-xl transition-all text-xl ${activeClass('/app/page-2')}`}>🧭</Link>
          <Link href="/app/page-3" className={`p-3 rounded-xl transition-all text-xl ${activeClass('/app/page-3')}`}>✨</Link>
          
          {/* Back to Landing Page (Profile) */}
          <Link href="/" className="p-3 rounded-xl hover:bg-white/10 transition-all text-xl">👤</Link>

          {/* Theme Toggle at the very bottom */}
          <div className="mt-auto pb-4">
            <ThemeToggle />
          </div>
        </nav>
      </aside>

      {/* MOBILE BOTTOM BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-around z-[100] px-4">
        <Link href="/app/page-1" className={`p-2 rounded-lg transition-all ${activeClass('/app/page-1')}`}>💬</Link>
        <Link href="/app/page-2" className={`p-2 rounded-lg transition-all ${activeClass('/app/page-2')}`}>🧭</Link>
        <Link href="/app/page-3" className={`p-2 rounded-lg transition-all ${activeClass('/app/page-3')}`}>✨</Link>
        
        {/* Profile/Home Link */}
        <Link href="/" className="p-2 text-xl hover:bg-white/10 rounded-lg">👤</Link>
        
        {/* Simple Theme Toggle */}
        <ThemeToggle />
      </nav>
    </>
  )
}