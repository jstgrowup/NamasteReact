import { useEffect, useState } from "react";
import { IMAGE_CDN } from "../config/config";
import { Link } from "react-router-dom";
const validateUser = () => {
  return true;
};
const Title = () => {
  return <a href="">{/* <img src={IMAGE_CDN} alt="" /> */}</a>;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("food villa");
  return (
    <div>
      <Title />
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? <button type="">Login</button> : <button>Logout</button>}
    </div>
  );
};
export default Header;
