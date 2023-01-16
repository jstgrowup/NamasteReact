import ToggleLog from "./toggleLog";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

export const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </li>
        <li>Sign in</li>
        <li>Cart</li>
      </ul>
      <ToggleLog />
    </div>
  );
};
