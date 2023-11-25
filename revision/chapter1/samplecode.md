
``
import React from "react";
import ReactDOM from "react-dom/client";
// hot module reload
// file watchers
//
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "heading 1 for parcel"
// );
// console.log("heading:", heading);
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Heading 2 for my use"
// );
const Title = () => {
 return <img
    src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    alt="no Image"
  />;
};
const HeadingUsingJSX = () => {
  return (
    <div>
      <Title/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
// this is JSX
// const box = React.createElement(
//   "div",
//   {
//     id: "sample div",
//     key: "div",
//   },
//   [headingUsingJSX]
// );

const AppLayout = () => {
  return (
    <div>
      {/* {HeadingUsingJSX()} */}
      <HeadingUsingJSX />
      <h1>Namaste react</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
``

``