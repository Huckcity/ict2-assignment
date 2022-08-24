import React from "react";
import Tv from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvList = ({ tvshows, action }) => {
  let tvCards = tvshows.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Tv key={tv.id} tvshow={tv} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;
