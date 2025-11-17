export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Divines. All rights reserved.</p>
          <nav className="flex gap-6 text-sm text-white/80">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#locations" className="hover:text-white">Locations</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
