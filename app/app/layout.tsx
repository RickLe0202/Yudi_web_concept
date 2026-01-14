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
      <main className="flex-grow">
        <div className="">
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
