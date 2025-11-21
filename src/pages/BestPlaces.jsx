import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const samplePlaces = [
	{ id: 1, name: 'Gokarna Beach', city: 'Gokarna', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60' },
	{ id: 2, name: 'Mysore Palace', city: 'Mysore', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60' },
]

export default function BestPlaces() {
	return (
		<Grid container spacing={3}>
			{samplePlaces.map((p) => (
				<Grid item xs={12} sm={6} md={4} key={p.id}>
					<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
						<CardMedia component="img" image={p.img} alt={p.name} height="180" />
						<CardContent sx={{ flex: 1 }}>
							<Typography variant="h6">{p.name}</Typography>
							<Typography variant="body2" color="text.secondary">{p.city}</Typography>
						</CardContent>
						<Button variant="contained" sx={{ m: 2, mt: 0 }}>View</Button>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

