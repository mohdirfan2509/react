import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-1 m-1 bg-pink-50">
          <li>Home</li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>n
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
