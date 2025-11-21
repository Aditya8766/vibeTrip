import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function SearchForm() {
  const handleSearch = (e) => {
    e.preventDefault()
    const state = e.target.state?.value
    const city = e.target.city?.value
    // in a real app we'd query a backend; for now scroll to best
    console.log('Search', state, city)
    document.getElementById('best')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 2, boxShadow: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <TextField fullWidth name="state" label="State" placeholder="Karnataka" />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField fullWidth name="city" label="City" placeholder="Bengaluru" />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button type="submit" variant="contained" fullWidth>Search</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
