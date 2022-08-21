import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateMoviePage";
import { getTvShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TvDetailsPage = () => {
  const { id } = useParams();
  const {
    data: tvshow,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTvShow);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvshow ? (
        <>
          <PageTemplate tvshow={tvshow}>
            <TvDetails tvshow={tvshow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
