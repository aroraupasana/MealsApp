import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorites(ids) {
    setFavoriteMealIds((currentFavIDs) => [...currentFavIDs, ids]);
  }

  function removeFavorites(ids) {
    setFavoriteMealIds((currentFavIDs) =>
      currentFavIDs.filter((mealId) => mealId !== ids)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavouritesContextProvider;
