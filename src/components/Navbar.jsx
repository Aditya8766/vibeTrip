import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

const navItems = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Purpose', id: 'purpose' },
	{ label: 'Best Places', id: 'best' },
	{ label: 'Gallery', id: 'gallery' },
	{ label: 'Contact', id: 'contact' },
]

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const [scrolled, setScrolled] = React.useState(false)

	React.useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20)
		window.addEventListener('scroll', onScroll)
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

	const scrollToId = (id) => {
		const el = document.getElementById(id)
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				VibeTrip
			</Typography>
			<List>
				{navItems.map((item) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton onClick={() => scrollToId(item.id)} sx={{ textAlign: 'center' }}>
							{item.label}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				component="nav"
				position="fixed"
				sx={{
					top: 0,
					zIndex: (theme) => theme.zIndex.appBar + 10,
					bgcolor: '#AAC4F5',
					transition: 'box-shadow 220ms ease, background-color 220ms ease',
					boxShadow: scrolled ? '0 8px 28px rgba(2,6,23,0.35)' : 'none',
				}}
			>
				<Toolbar sx={{ backdropFilter: scrolled ? 'saturate(120%) blur(6px)' : 'none', minHeight: 64 }}>
					<IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1, cursor: 'pointer' }} onClick={() => scrollToId('home')}>
						VibeTrip
					</Typography>

					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						{navItems.map((item) => (
							<Button
								key={item.id}
								onClick={() => scrollToId(item.id)}
								sx={{
									color: '#fff',
									borderRadius: 2,
									px: 2,
									py: 0.6,
									textTransform: 'none',
									ml: 1,
									bgcolor: 'transparent',
									border: '1px solid transparent',
									transition: 'all 180ms ease',
									'&:hover': { bgcolor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' },
								}}
								variant="text"
							>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { md: 'none' } }} PaperProps={{ sx: { bgcolor: 'rgba(8,10,12,0.98)' } }}>
				<Box sx={{ color: '#fff', minWidth: 220 }}>{drawer}</Box>
			</Drawer>
		</Box>
	)
}

