import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation/>
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
