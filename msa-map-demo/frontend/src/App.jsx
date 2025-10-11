import React, { useEffect, useState } from 'react'
import { getGarages, getRegions } from './api'
import MapView from './components/MapView'

export default function App() {
  const [regions, setRegions] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('')
  const [garages, setGarages] = useState([])

  useEffect(() => {
    getRegions().then(setRegions).catch(() => setRegions([]))
  }, [])

  useEffect(() => {
    getGarages(selectedRegion || undefined).then(setGarages)
  }, [selectedRegion])

  return (
    <div className="container">
      <header>
        <h1>Carte des garages</h1>
        <p>Filtre par région et visualisation sur carte (Leaflet + React)</p>
      </header>

      <div className="controls">
        <label htmlFor="region">Région :</label>
        <select
          id="region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">Toutes</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <MapView garages={garages} />

      <div className="summary">
        <strong>{garages.length}</strong> garage(s) affiché(s)
      </div>
    </div>
  )
}
