import { useEffect, useState } from 'react'

export default function Locations() {
  const [locations, setLocations] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${baseUrl}/api/locations`)
        if (!res.ok) throw new Error('failed')
        setLocations(await res.json())
      } catch (e) {
        setLocations([])
      }
    })()
  }, [])

  return (
    <section id="locations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Locations</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-zinc-300 p-10 text-center text-zinc-500">
              New spots opening soon.
            </div>
          )}
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">{loc.name}</h3>
              <p className="mt-2 text-zinc-600">{loc.address}</p>
              <p className="text-zinc-600">{loc.city}, {loc.country}</p>
              {loc.phone && <p className="mt-2 text-zinc-700">{loc.phone}</p>}
              {loc.hours && <p className="mt-1 text-sm text-zinc-500">Hours: {loc.hours}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
