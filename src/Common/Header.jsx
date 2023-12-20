import { Button, Typography } from '@mui/material'
import React from 'react'
import "../App.css"

const Header = ({setFavoritos}) => {
  return (
    <div className='Header-container'>
      <Typography variant='h4' color="primary">Peliculas</Typography>
      <div className='botones'>
        <Button variant='contained' color='primary' onClick={()=>setFavoritos(false)}>Todos</Button>
        <Button variant='contained' color='primary' onClick={()=>setFavoritos(true)}>Favoritos</Button>
      </div>
    </div>
  )
}

export default Header
