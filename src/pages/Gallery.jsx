import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'

const images = [
	'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
]

export default function Gallery() {
	return (
		<div>
			<Typography variant="h4" sx={{ mb: 2 }}>Gallery</Typography>
			<ImageList cols={4} gap={8} sx={{ width: '100%' }}>
				{images.map((src) => (
					<ImageListItem key={src} cols={1} rows={1}>
						<img src={src} alt="gallery" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
					</ImageListItem>
				))}
			</ImageList>
		</div>
	)
}

