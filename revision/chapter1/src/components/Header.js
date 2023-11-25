import { useEffect, useState } from "react";
import { IMAGE_CDN } from "../config/config";

const Title = () => {
  return <a href="">{/* <img src={IMAGE_CDN} alt="" /> */}</a>;
};
const Header = () => {
  const [title, setTitle] = useState("food villa");
  return (
    <div>
      <Title />
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header
