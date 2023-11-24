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
const HeadingUsingJSX = () => (
  <h1 tabIndex="1" className="header">
    Heading
  </h1>
);
// this is JSX
// const box = React.createElement(
//   "div",
//   {
//     id: "sample div",
//     key: "div",
//   },
//   [headingUsingJSX]
// );

const Head = () => {
  return (
    <div>
      {/* {HeadingUsingJSX()} */}
      <HeadingUsingJSX />
      <h1>Namaste react</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head />);
