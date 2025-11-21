import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function Purpose() {
	const points = [
		'Collect user-submitted hidden gems and underrated spots',
		'Organize places by state and city for quick planning',
		'Allow users to map and build itineraries',
		'Make sharing and discovering places simple and community-driven',
	]

	return (
		<Box>
			<Typography variant="h4" sx={{ mb: 2 }}>Purpose</Typography>
			<List>
				{points.map((p) => (
					<ListItem key={p}><ListItemText primary={p} /></ListItem>
				))}
			</List>
		</Box>
	)
}

