import Box from '@mui/material/Box'
import SimpleMap from './SimpleMap'

const sampleMarkers = [
  { id: 2, name: 'Mysore Palace', city: 'Mysore', lat: 12.3051, lng: 76.6551 },
  { id: 3, name: 'Gokarna Beach', city: 'Gokarna', lat: 14.5477, lng: 74.3185 },
]

export default function MapPlaceholder() {
  return (
    <Box sx={{ mt: 3, borderRadius: 2, overflow: 'hidden', height: { xs: 240, md: 360 } }}>
      <SimpleMap markers={sampleMarkers} center={[12.9716, 77.5946]} zoom={7} />
    </Box>
  )
}
