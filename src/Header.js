import { Link } from "react-router-dom";
import { FaPiggyBank, FaHome, FaSearch, FaStar } from "react-icons/fa";


function Header() {

  const iconStyle = {
    fontSize: "1.75em",
    marginRight: "1rem",
    color: "#fff"
  };

  return (
    <header>
      <div className="flex items-center justify-around bg-secondary py-8 mb-6">
        <div className="flex">
          <FaPiggyBank style={iconStyle} />
          <h1 className="text-4xl">Crypto App</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/">
            <FaHome style={iconStyle} />
          </Link>
          

          <Link to="/search">
            <FaSearch style={iconStyle} />
          </Link>
          <Link to="/favorites">
            <FaStar style={iconStyle} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
