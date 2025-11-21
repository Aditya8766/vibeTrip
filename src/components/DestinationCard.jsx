import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function DestinationCard({ place }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 300ms', '&:hover': { transform: 'translateY(-6px)' } }}>
      <CardMedia component="img" image={place.img} alt={place.name} height="180" />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{place.name}</Typography>
        <Typography variant="body2" color="text.secondary">{place.city}</Typography>
      </CardContent>
      <Button variant="contained" sx={{ m: 2, mt: 0 }}>View</Button>
    </Card>
  )
}
