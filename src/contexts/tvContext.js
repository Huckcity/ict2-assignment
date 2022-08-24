import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [tvFavourites, setTvFavourites] = useState([]);
  const [tvPlaylist, setTvPlaylist] = useState([]);

  const addToFavourites = (tvshow) => {
    if (!tvFavourites.includes(tvshow.id)) {
      let newFavourites = [...tvFavourites, tvshow.id];
      setTvFavourites(newFavourites);
    }
  };

  const addToPlaylist = (tvshow) => {
    if (!tvPlaylist.includes(tvshow.id)) {
      let newPlaylist = [...tvPlaylist, tvshow.id];
      setTvPlaylist(newPlaylist);
    }
  };

  const removeFromFavourites = (tvshow) => {
    setTvFavourites(tvFavourites.filter((mId) => mId !== tvshow.id));
  };

  const removeFromPlaylist = (tvshow) => {
    setTvPlaylist(tvPlaylist.filter((mId) => mId !== tvshow.id));
  };

  return (
    <TvContext.Provider
      value={{
        tvFavourites,
        tvPlaylist,
        addToFavourites,
        removeFromFavourites,
        removeFromPlaylist,
        addToPlaylist,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
