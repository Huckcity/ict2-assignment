import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import { getActorsMovies } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import PageTemplate from "../../components/templateMovieListPage";
import AddToFavouritesIcon from "../../components/cardIcons/addToFavourites";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ({ actor }) => {
  const classes = useStyles();

  const { data, error, isLoading, isError } = useQuery(
    ["actorsMovies", { id: actor.id }],
    getActorsMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actorsMovies = data ? data.cast : [];
  console.log(actorsMovies);
  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <hr />
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <Typography variant="h5" component="h3">
        Stars in:
      </Typography>
      <hr />
      <PageTemplate
        title={`Movies starring ${actor.name}`}
        movies={actorsMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />;
        }}
      />{" "}
    </>
  );
};
export default ActorDetails;
