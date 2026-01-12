'use client'

import { useEffect, useState } from 'react'

const words = ['bro', 'mama', 'dad', 'sis']

export default function RotatingWord() {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length)
                setFade(true)
            }, 300)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <span
            className={`inline-flex items-center font-semibold text-pink-500
            transition-opacity duration-300
            ${fade ? 'opacity-100' : 'opacity-0'}
            `}
        style={{ width: '4ch' }}
        >
            {words[index]}
        </span>
    )
}
