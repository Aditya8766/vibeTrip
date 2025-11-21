import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function About() {
	return (
		<Box>
			<Typography variant="h4" sx={{ mb: 2 }}>About VibeTrip</Typography>
			<Typography variant="body1" sx={{ mb: 2 }}>
				VibeTrip is a community driven trip planning tool to collect and showcase places — famous and hidden alike. Users can upload places they visit, add descriptions and images, and tag them by city and state.
			</Typography>
			<Typography variant="body1">
				This project is intended as a minimal, elegant starting point: responsive UI with React + Vite + MUI and simple routing so you can extend it with a backend, maps, and user accounts later.
			</Typography>
		</Box>
	)
}

