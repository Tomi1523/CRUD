import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateMovieModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
          <Typography variant="h5" color="primary">Agregar pelicula</Typography>
            <TextField 
              id="outlined-basic"
              label="Pelicula"
              variant="outlined"
              fullWidth
            />
              <TextField 
              id="outlined-basic"
              label="Fecha de creacion"
              variant="outlined"
              fullWidth
            />
              <TextField 
              id="outlined-basic"
              label="Descripcion"
              variant="outlined"
              fullWidth
            />
              <TextField 
              id="outlined-basic"
              label="Adjuntar URL de la imagen"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" color="primary" size="large">Agregar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateMovieModal;
