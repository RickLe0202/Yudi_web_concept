'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { register } from '@/components/utils/mockAuth'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('') // Clear previous errors

    // Call the simple register function
    const success = register(email, password)

    if (!success) {
      setError('This email is already registered.')
      return
    }

    // If successful, redirect to your app page
    router.push('/app/page-1')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-3xl
      bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl
      border border-gray-200 dark:border-white/10 shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-2">Create account</h1>
        <p className="text-center text-gray-500 mb-8">
          Create account with Yudi
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl outline-none transition-all
            border border-gray-200 dark:border-white/10 
            bg-white/20 dark:bg-white/5 backdrop-blur-md
            text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500/50"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl outline-none transition-all
            border border-gray-200 dark:border-white/10 
            bg-white/20 dark:bg-white/5 backdrop-blur-md
            text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500/50"
          />

          {error && (
            <p className="text-sm text-red-500 text-center animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold
            bg-[#0d1425] text-white border border-blue-500/50
            shadow-[0_0_15px_rgba(59,130,246,0.3)]
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            transition-all"
          >
            Sign up →
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}