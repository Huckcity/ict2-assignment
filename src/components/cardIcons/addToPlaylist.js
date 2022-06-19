import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { makeStyles } from "@material-ui/core/styles";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: "2rem",
    cursor: "pointer",
  },
}));

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const classes = useStyles();

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  return (
    <PlaylistAdd
      className={classes.icon}
      aria-label="add to playlist"
      onClick={handleAddToPlaylist}
    >
      <FavoriteIcon color="primary" fontSize="large" />
    </PlaylistAdd>
  );
};

export default AddToFavouritesIcon;
