import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Menu />
        <section id="about" className="bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About Divines</h2>
                <p className="mt-4 text-white/80">
                  Born from late-night cravings and big city energy, Divines serves bold fast food with premium ingredients.
                  We smash, stack, and sauce with no shortcuts.
                </p>
                <p className="mt-2 text-white/70">Max speed. Max flavor.</p>
              </div>
              <div>
                <img
                  className="rounded-xl border border-white/10"
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop"
                  alt="Divines kitchen"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <p className="mt-4 text-white/80">For catering, partnerships, or press: hello@divinesfast.com</p>
          </div>
        </section>
        <Locations />
      </main>
      <Footer />
    </div>
  )
}

export default App
