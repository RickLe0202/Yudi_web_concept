'use client'

import CanvasBackground from '@/components/utils/CanvasBackground'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CanvasBackground />
      {children}
    </>
  )
}
