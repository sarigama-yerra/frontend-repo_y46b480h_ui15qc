import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-black to-zinc-900 py-40 sm:py-52">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop"
          alt="Burgers background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Divines — Fast Food, Max Flavor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg leading-8 text-white/80"
          >
            Smash burgers, loaded fries, crispy chicken, and shakes that slap. Order now and we’ll fire it up.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#menu"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-white/90"
            >
              Explore Menu
            </a>
            <a href="#locations" className="text-sm font-semibold leading-6 text-white">
              Find a location →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
