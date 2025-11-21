import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault()
		// stub: replace with API call
		alert('Thanks! We received your message (demo).')
	}

	return (
		<Box>
			<Typography variant="h4" sx={{ mb: 2 }}>Contact</Typography>
			<Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, maxWidth: 640 }}>
				<TextField label="Name" required />
				<TextField label="Email" type="email" required />
				<TextField label="Message" multiline rows={4} required />
				<Button type="submit" variant="contained">Send</Button>
			</Box>
		</Box>
	)
}

