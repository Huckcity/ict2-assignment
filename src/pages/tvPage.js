import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTvShows } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TvPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "discoverTV",
    getTvShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvshows = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = tvshows.filter((tv) => tv.favouurite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvshows={tvshows}
      action={(tvshow) => {
        return <AddToFavouritesIcon tvshow={tvshow} />;
      }}
      controls={true}
    />
  );
};

export default TvPage;
