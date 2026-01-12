import Navigation from '@/components/ui/Navigation'
import Welcome from '@/components/sections/Welcome'
import About from '@/components/sections/About'
import Feature from '@/components/sections/Features'
import Chatroom from '@/components/sections/Chatroom'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Welcome />
      <About />
      <Feature />
      <Chatroom />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

