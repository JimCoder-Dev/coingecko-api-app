import { render } from "react-dom";
import SearchList from "./SearchList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import SearchCoin from "./SearchCoin";
import SearchPage from "./Search";
import FavoritesPage from "./Favorites";
import { PageProvider } from "./PageContext";

const App = () => {
  return (
    <PageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchList />} />
          <Route path="/:id" element={<SearchCoin />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
};

render(<App />, document.getElementById("root"));
