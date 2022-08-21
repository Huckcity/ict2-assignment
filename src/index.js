import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import ActorsPage from "./pages/actorsPage";
import TvPage from "./pages/tvPage";
import TvDetailsPage from "./pages/tvDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/* New Header  */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route
              path="/movies/favourites"
              element={<FavouriteMoviesPage />}
            />
            <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actors/:id" element={<ActorDetailsPage />} />
            <Route path="/tv/:id" element={<TvDetailsPage />} />
            <Route path="/tv" element={<TvPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
