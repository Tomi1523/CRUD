import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMovies from "../Common/CardMovies";
import styles from "./Home.module.css";
import Header from "../Common/Header";
import confetti from "canvas-confetti";
import Button from "@mui/material/Button";
import CreateMovieModal from "../Common/CreateMovieModal";

//-----------componente padre----------//

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [dispatchLike, setDispatchLike] = useState(false);
  const [favoritos, setFavoritos] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
      
    setDispatchLike(false);
    
  }, [dispatchLike]);

  
  const handleLike = (movie) => {
    if ( movie.isLiked == false) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }

    axios
      .patch(`http://localhost:5000/movies/${movie.id}`, {
        isLiked: !movie.isLiked,
      })
      .then((res) => setDispatchLike(true))
      .catch((err) => console.log(err));
  };

  // Filtrar películas por las que tienen "isLiked" en true
  const moviesFilter = movies.filter((movie) => movie.isLiked);

  return (
    <>
      <Header setFavoritos={setFavoritos} />
      <Button onClick={handleOpen}>Agregar pelicula</Button>
      <CreateMovieModal open={open} handleClose={handleClose}/>
      
      <div className={styles.containerCards}>
        {!favoritos //false
          ? movies.map((movie) => {
              return (
                <CardMovies
                  movie={movie}
                  key={movie.id}
                  handleLike={handleLike}
                />
              );
            })
            //true
          : moviesFilter.map((movie) => {
              return (
                <CardMovies
                  movie={movie}
                  key={movie.id}
                  handleLike={handleLike}
                />
              );
            })}
      </div>
    </>
  );
};

export default Home;
