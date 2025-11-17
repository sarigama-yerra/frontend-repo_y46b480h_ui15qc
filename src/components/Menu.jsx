import { useEffect, useState } from 'react'

const categories = ['Featured', 'Burgers', 'Chicken', 'Fries', 'Drinks', 'Desserts']

export default function Menu() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('Featured')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetchMenu(active === 'Featured' ? undefined : active)
  }, [active])

  async function fetchMenu(category) {
    try {
      const url = new URL(`${baseUrl}/api/menu`)
      if (category) url.searchParams.append('category', category)
      if (active === 'Featured') url.searchParams.append('featured', true)
      const res = await fetch(url.toString())
      if (!res.ok) throw new Error('Failed to load menu')
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setItems([])
    }
  }

  return (
    <section id="menu" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Menu</h2>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm ${
                active === cat
                  ? 'border-black bg-black text-white'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-zinc-300 p-10 text-center text-zinc-500">
              Menu coming soon. Check back later.
            </div>
          )}

          {items.map((item) => (
            <article key={item.name} className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                ) : (
                  <div className="flex h-full items-center justify-center text-zinc-400">No image</div>
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{item.description}</p>
                  {typeof item.spicy_level === 'number' && (
                    <p className="mt-2 text-xs text-orange-600">Spice: {'🌶️'.repeat(item.spicy_level)}</p>
                  )}
                </div>
                <div className="shrink-0 rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-white">${item.price?.toFixed?.(2) ?? item.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
