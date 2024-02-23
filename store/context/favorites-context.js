import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remuveFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {

  const [favoritesID, setFavoriteID] = useState([]);

  function addFavorite(id) {
    setFavoriteID((currentIds) => [...currentIds, id]);
  }

  function remuveFavorite(id) {
    setFavoriteID((currentIds) => currentIds.filter((mealId) => mealId !== id));
  }
  const value = {
    ids: favoritesID,
    addFavorite: addFavorite,
    remuveFavorite: remuveFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
