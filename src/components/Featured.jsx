import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DestinationCard from './DestinationCard'

const samplePlaces = [
  { id: 2, name: 'Gokarna Beach', city: 'Gokarna', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Mysore Palace', city: 'Mysore', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60' },
]

export default function Featured() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Featured Destinations</Typography>
      <Grid container spacing={3}>
        {samplePlaces.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <DestinationCard place={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
