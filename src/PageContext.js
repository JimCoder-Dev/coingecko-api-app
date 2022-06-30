import { createContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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

  return (
    <PageContext.Provider
      value={{
        currentPage,
        changePage,
        loading,
        toggleLoading,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
