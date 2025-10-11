import React, { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix marker icons in bundlers by providing explicit URLs
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function MapView({ garages }) {
  const center = useMemo(() => {
    if (garages.length === 0) return [46.6, 2.5] // France center approx
    const lat = garages.reduce((sum, g) => sum + g.lat, 0) / garages.length
    const lng = garages.reduce((sum, g) => sum + g.lng, 0) / garages.length
    return [lat, lng]
  }, [garages])

  return (
    <div className="map-wrap">
      <MapContainer center={center} zoom={6} scrollWheelZoom style={{ height: '60vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {garages.map((g) => (
          <Marker key={g._id || (g.name + g.lat)} position={[g.lat, g.lng]} icon={markerIcon}>
            <Popup>
              <strong>{g.name}</strong><br/>
              {g.address || ''}<br/>
              {g.city} — {g.region}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
