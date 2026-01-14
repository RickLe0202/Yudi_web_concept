import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navigation /> */}
      <main className="flex-grow pt-16">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
