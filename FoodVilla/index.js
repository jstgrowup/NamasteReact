import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  <img src="" alt="" className="logo" />;
};
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
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
const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dc7vroerjbgboejasac3"
        alt="ok"
      />
      <h2>Burger king</h2>
      <h3>Burgers American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <>
      <h4>Body</h4>;
      <RestaurantCard />
    </>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
  /**
   * Header
   *     Logo
   *     Nav Items
   *     Cart
   *
   * Body
   *     Search Bar
   *     Restaurant List
   *          Restaurant Card
   *              Image
   *              Name
   *              Rating
   *              COusines
   * Footer
   *      Links
   *      Copyright
   *
   */
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(Compo>);
