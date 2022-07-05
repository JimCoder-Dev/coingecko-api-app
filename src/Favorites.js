import PageContext from "./PageContext";
import { useContext } from 'react';
function FavoritesPage(){

  const { favorites, setFavorites } = useContext(PageContext);
  
    function showFavorites(){
      console.log(favorites)
    }

    return (
      <div className="text-center">
        <h1 className="text-9xl">FAVORITES</h1>
        { favorites.length > 0 ? <h1>Hi</h1> : <h2>THERe</h2>}

        <button className="btn btn-primary" onClick={showFavorites}>
          Click to see favorites
        </button>
      </div>
    );
  };
  
  export default FavoritesPage;