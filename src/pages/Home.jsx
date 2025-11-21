import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import Featured from '../components/Featured'
import MapPlaceholder from '../components/MapPlaceholder'
import Testimonials from '../components/Testimonials'

export default function Home() {
	return (
		<Box>
			<Hero />

			<Box sx={{ mb: 4 }}>
				<SearchForm />
			</Box>

			<Box sx={{ mb: 6 }}>
				<Featured />
			</Box>

			<Grid container spacing={4} alignItems="stretch">
				<Grid item xs={12} md={7} sx={{ display: 'flex' }}>
					<Box sx={{ flex: 1 }}>
						<MapPlaceholder />
					</Box>
				</Grid>
				<Grid item xs={12} md={5} sx={{ display: 'flex' }}>
					<Box sx={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
						<Testimonials />
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

