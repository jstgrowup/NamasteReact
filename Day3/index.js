import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1", {}, "heading 1 from parcel");
const heading2 = React.createElement("h2", {}, "heading 2 from sadfsf");

const divu = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divu);
