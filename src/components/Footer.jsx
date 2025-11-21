import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function Footer() {
	return (
		<Box component="footer" sx={{ bgcolor: 'var(--vt-primary)', color: '#052026', mt: 6, py: 4 }}>
			<Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
				<Typography variant="h6">VibeTrip</Typography>
				<Typography variant="body2" sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
					Find, add and plan trips — hidden gems included.
				</Typography>
				<Box>
					<IconButton component={Link} href="#" sx={{ color: 'inherit' }}><GitHubIcon /></IconButton>
					<IconButton component={Link} href="#" sx={{ color: 'inherit' }}><TwitterIcon /></IconButton>
				</Box>
			</Container>
		</Box>
	)
}

