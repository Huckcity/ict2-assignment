import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getMovieCredits } from "../../api/tmdb-api";
import ActorCard from "../actorCard";
import { Typography } from "@material-ui/core";
import ActorList from "../actorList";

const useStyles = makeStyles({
  castContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credit) => {
      setCredits(credit);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography variant="h5" component="h3">
        Top 10 Credited Cast
      </Typography>
      <div className={classes.castContainer}>
        {/* {credits.slice(0, 10).map((cast) => (
          <ActorCard key={cast.id} character={cast} />
        ))} */}
        <ActorList actors={credits} limit="10" />
      </div>
    </>
  );
}
