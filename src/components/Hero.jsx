import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Hero() {
  return (
    <Box sx={{
      height: { xs: 420, md: 560 },
      display: 'flex',
      alignItems: 'center',
      borderRadius: 2,
      mb: 6,
      backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=60)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box sx={{ p: { xs: 3, md: 6 }, color: '#052026' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: 'rgba(5,32,38,0.95)', animation: 'slideUp 800ms ease' }}>
          Discover hidden gems. Plan smarter.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, maxWidth: 680, color: 'rgba(5,32,38,0.8)', animation: 'fadeIn 1200ms ease' }}>
          Upload places, browse curated lists, and map your full itinerary in one place. Community-powered travel discovery.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large" sx={{ boxShadow: 3 }} onClick={() => document.getElementById('best')?.scrollIntoView({ behavior: 'smooth' })}>Explore Destinations</Button>
          <Button variant="outlined" size="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get In Touch</Button>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', right: -40, bottom: -20, opacity: 0.14, transform: 'rotate(-12deg)', width: { xs: 220, md: 420 }, height: { xs: 220, md: 420 }, background: 'radial-gradient(circle at 30% 30%, var(--vt-warning), transparent 40%)' }} />
    </Box>
  )
}
