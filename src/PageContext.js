import { createContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([])

  function changePage(nextPage) {
    if (nextPage === "ADD") {
      const newPageNumber = currentPage + 1;
      setCurrentPage(newPageNumber);
    } else if (nextPage === "MINUS") {
      if (currentPage !== 1) {
        const newPageNumber = currentPage - 1;
        setCurrentPage(newPageNumber);
      }
    }
  }

  function toggleLoading(loadingEl){
    setLoading(loadingEl)
  }

  function addCoinToFavorites(coin){
    setFavorites(favorites => [...favorites, coin])
  }

  function deleteAllFavorites(){
    setFavorites([])
  }

  return (
    <PageContext.Provider
      value={{
        currentPage,
        changePage,
        loading,
        toggleLoading,
        favorites, 
        addCoinToFavorites, 
        deleteAllFavorites
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
