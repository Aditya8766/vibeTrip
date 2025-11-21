import React from 'react'
import Box from '@mui/material/Box'

export default function SimpleMap({ center = [12.9716, 77.5946], zoom = 7, markers = [] }) {
  const [lat, lon] = center

  const delta = Math.max(0.05, 1.2 * (8 / Math.max(zoom, 1)))
  const lat1 = lat - delta
  const lat2 = lat + delta
  const lon1 = lon - delta * 1.3
  const lon2 = lon + delta * 1.3

  const markerParam = markers.length ? `${markers[0].lat}%2C${markers[0].lng}` : `${lat}%2C${lon}`
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(lon1)}%2C${encodeURIComponent(lat1)}%2C${encodeURIComponent(lon2)}%2C${encodeURIComponent(lat2)}&layer=mapnik&marker=${markerParam}`

  const osmLink = `https://www.openstreetmap.org/#map=${zoom}/${lat}/${lon}`

  return (
    <Box sx={{ width: '100%', height: '100%', borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
      <a href={osmLink} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
        <iframe
          title="OpenStreetMap"
          src={src}
          style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
          loading="lazy"
        />
      </a>
    </Box>
  )
}
