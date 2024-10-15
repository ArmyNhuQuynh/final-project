import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate();


  return (
    <header>
      <Box>
         <Button onClick={() => navigate('/')} variant="contained">Home</Button>
         <Button onClick={() => navigate('/dashboard')} variant="contained">Dashboard</Button>
         <Button onClick={() => navigate('/contact')} variant="contained">Contact</Button>

      </Box>
    </header>
  )
}
