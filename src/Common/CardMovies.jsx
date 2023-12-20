import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';



//-----------componente hijo------------//

const CardMovies = ({movie, handleLike}) => {

  


  return (
    <div>
     <Card sx={{ width: 300, height: 500}}>
      <CardHeader
        title={movie.name}
        subheader={movie.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={movie.img}
        alt="Paella dish"
      />
      <CardContent sx={{height: 150}}>
        <Typography variant="body2" color="text.secondary">
         {movie.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={movie.isLiked ? "error" : "disabled"}
         onClick={() => {handleLike(movie)}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      
    </Card> 
    </div>
  )
}

export default CardMovies
