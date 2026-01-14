'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [mounted, setMounted] = useState(false)

    // Load theme đã lưu (theo doc: manual toggle)
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        setMounted(true)
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
    }, [])

    const toggleTheme = () => {
        const html = document.documentElement

        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }

    // If not mounted, render an empty box so the layout doesn't jump
    if (!mounted) return <div className="h-10 w-10" />
    
    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
            h-10 w-10
            flex items-center justify-center
            text-gray-700 dark:text-gray-300
            hover:text-primary-600 dark:hover:text-primary-400
            transition-colors"
        >
            {theme === 'dark' ? '🌙' : '☀️'}
        </button>
    )
}