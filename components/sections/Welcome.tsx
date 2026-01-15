import Link from 'next/link'
import RotatingWord from '@/components/utils/RotatingWord'

export default function Hero() {
  return (
    <section className="  relative
      min-h-screen
      grid
      place-content-center
      overflow-hidden
      transition-colors duration-200">

      {/* Content */}
      <div className="relative z-10 grid min-h-screen place-content-center px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Yudi
          </h1>

          <p className="text-4xl md:text-6xl mb-10 text-gray-700 dark:text-white/80 leading-tight">
            <span className="inline-flex items-center gap-2">
              <span>Create your</span>
              <RotatingWord />
            </span>
            <br />
            who speaks to your vibe
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
            Create someone who gets you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/login"
              className="
                px-10 py-3 rounded-full font-semibold
                bg-[#0d1425] text-white
                border border-blue-500/50
                shadow-[0_0_15px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                hover:border-blue-400
                transition-all duration-300
                inline-flex items-center justify-center
              "
            >
              Join Yudi <span className="ml-2">→</span>
            </Link>

            <Link
              href="#features"
              className="
                px-10 py-3 rounded-full font-semibold
                border border-slate-400 dark:border-white/20
                text-slate-600 dark:text-white/70
                hover:bg-slate-50 dark:hover:bg-white/5
                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                transition-all duration-300
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

