import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Purpose from './pages/Purpose'
import BestPlaces from './pages/BestPlaces'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: '#FFF2C6' },
		secondary: { main: '#FFF8DE' },
		warning: { main: '#AAC4F5' },
		error: { main: '#8CA9FF' },
	},
	typography: {
		fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Box component="main" sx={{ flex: 1, pt: { xs: '72px', md: '84px' }, pb: { xs: 2, md: 4 } }}>
				<Container maxWidth="lg">
					<section id="home"><Home /></section> {/* no-op placeholder */}
					<section id="about" style={{ marginTop: 48 }}><About /></section> {/* no-op placeholder */}
					<section id="purpose" style={{ marginTop: 48 }}><Purpose /></section> {/* no-op placeholder */}
					<section id="best" style={{ marginTop: 48 }}><BestPlaces /></section>
					<section id="gallery" style={{ marginTop: 48 }}><Gallery /></section>
					<section id="contact" style={{ marginTop: 48 }}><Contact /></section>
				</Container>
			</Box>
			<Footer />
		</ThemeProvider>
	)
}

