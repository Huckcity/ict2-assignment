import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import TvList from "../tvList";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },

  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ShowListPageTemplate({ movies, tvshows, title, action, controls }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [minRatingFilter, setMinRatingFilter] = useState("0");
  const [maxRatingFilter, setMaxRatingFilter] = useState("10");
  const [movieSorting, setMovieSorting] = useState("0");

  const genreId = Number(genreFilter);
  const shows = movies ? movies : tvshows;
  const minRating = minRatingFilter;
  const maxRating = maxRatingFilter;
  const sorting = Number(movieSorting);

  let displayedShows = shows
    .filter((m) => {
      const title = m.name ? m.name : m.title;
      return title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return (
        Number(m.vote_average) > minRating && Number(m.vote_average) < maxRating
      );
    })
    .sort((a, b) => {
      if (sorting === 0) {
        return new Date(b.release_date) - new Date(a.release_date);
      } else if (sorting === 1) {
        return new Date(a.release_date) - new Date(b.release_date);
      } else if (sorting === 2) {
        return b.vote_average - a.vote_average;
      } else if (sorting === 3) {
        return a.vote_average - b.vote_average;
      } else {
        return new Date(b.release_date) - new Date(a.release_date);
      }
    });

  const handleChange = (type, value) => {
    if (type === "title") {
      setTitleFilter(value);
    } else if (type === "minRating") {
      setMinRatingFilter(value);
    } else if (type === "maxRating") {
      setMaxRatingFilter(value);
    } else if (type === "sorting") {
      setMovieSorting(value);
    } else {
      setGenreFilter(value);
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} controls={controls} />
        </Grid>
        <Grid item container spacing={5}>
          {movies && <MovieList action={action} movies={displayedShows} />}
          {tvshows && <TvList action={action} tvshows={displayedShows} />}
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          minRatingFilter={minRatingFilter}
          maxRatingFilter={maxRatingFilter}
          movieSorting={movieSorting}
        />
      </Drawer>
    </>
  );
}
export default ShowListPageTemplate;
