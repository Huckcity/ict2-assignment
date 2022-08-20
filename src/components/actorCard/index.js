import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { excerpt } from "../../util";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    margin: "10px",
    display: "flex",
    justiyContent: "space-between",
    flexDirection: "column",
  },
  bottomButton: {
    justifyContent: "center",
    marginTop: "auto",
  },
}));

export default function ActorCard({ actor }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {actor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {excerpt(actor.biography)}
        </Typography>
      </CardContent>
      <CardActions className={classes.bottomButton}>
        <Link to={`/actors/${actor.id}`}>
          <Button variant="contained" size="medium" color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
