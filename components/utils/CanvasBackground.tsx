'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  radius: number
  speed: number
  alpha: number
  alphaDir: number
}

type ShootingStar = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stars = useRef<Star[]>([])
  const shootingStars = useRef<ShootingStar[]>([])
  const mouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }
    console.log('Canvas mounted')

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 9000)
      stars.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.8 + 0.2,
        alpha: Math.random(),
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    const spawnShootingStar = () => {
      if (Math.random() < 0.006) {
        shootingStars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4,
          vx: 12 + Math.random() * 6,
          vy: 6 + Math.random() * 4,
          life: 0,
        })
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth
      mouse.current.y = e.clientY / window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)

    let frameId: number

    const render = () => {
      const isDark = document.documentElement.classList.contains('dark')

      // Background
      if (isDark) {
        ctx.fillStyle = '#0b0f19'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        ctx.fillStyle = '#ffffff'
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      const offsetX = (mouse.current.x - 0.5) * 40
      const offsetY = (mouse.current.y - 0.5) * 40

      // Stars
      stars.current.forEach((star) => {
        star.alpha += star.alphaDir * 0.005
        if (star.alpha <= 0.2 || star.alpha >= 1) star.alphaDir *= -1

        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${star.alpha * 0.7})`
          : `rgba(0,0,0,${star.alpha * 0.7})`

        ctx.beginPath()
        ctx.arc(
          star.x + offsetX * star.speed * 1, // star speed move as moving pointer
          star.y + offsetY * star.speed * 1,
          star.radius,
          0,
          Math.PI * 2
        )
        ctx.fill()
      })

      // Shooting stars
      spawnShootingStar()
      shootingStars.current = shootingStars.current.filter((s) => s.life < 30)

      shootingStars.current.forEach((s) => {
        ctx.strokeStyle = isDark
          ? 'rgba(255,255,255,0.8)'
          : 'rgba(0,0,0,1)'
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * 2, s.y - s.vy * 2)
        ctx.stroke()

        s.x += s.vx
        s.y += s.vy
        s.life++
      })

      frameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
       className="
      fixed inset-0
      z-0
      pointer-events-none
    "
    />
  )
}
