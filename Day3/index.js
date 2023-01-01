import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  { key: "h1" },
  "heading 1 from parcel"
);
const heading2 = React.createElement(
  "h2",
  { key: "h2" },
  "heading 2 from sadfsf"
);
const li1 = React.createElement("li", { key: "li1" }, "hello li1");
const li2 = React.createElement("li", { key: "li2" }, "hello li2");
const li3 = React.createElement("li", { key: "li3" }, "hello li3");

const lists = React.createElement(
  "ul",
  { style: { border: "1px solid black" }, key: "ul" },
  [li1, li2, li3]
);
const divu = React.createElement(
  "div",
  { style: { border: "2px solid red" }, id: "container", key: "h3" },
  [heading1, heading2, lists]
);
const newway = <h1 style={{ color: "red" }}>Namaste Reatc</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divu);
