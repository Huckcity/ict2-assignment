import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActors } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const ActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("getActors", getActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = actors.filter((a) => a.favourite);
  localStorage.setItem("favActors", JSON.stringify(favourites));

  return <PageTemplate title="Discover Actors" actors={actors} />;
};

export default ActorsPage;
