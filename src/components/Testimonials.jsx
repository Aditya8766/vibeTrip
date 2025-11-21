import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const quotes = [
  { id: 1, name: 'Anita', text: 'Found amazing hidden places — VibeTrip made planning easy.' },
  { id: 2, name: 'Rohit', text: 'Perfect for road trips. Loved the community suggestions.' },
  { id: 3, name: 'Meera', text: 'Saved so much time building my itinerary.' },
]

export default function Testimonials() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>What travelers say</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {quotes.map((q) => (
          <Paper key={q.id} sx={{ p: 2, borderRadius: 2, boxShadow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>&ldquo;{q.text}&rdquo;</Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>— {q.name}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
