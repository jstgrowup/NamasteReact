import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [
//     React.createElement("h1", { key: "h1" }, "this is h1 tag"),
//     React.createElement("h2", { key: "h2" }, "this is h2 tag"),
//     React.createElement("h3", { key: "h3" }, "this is h3 tag"),
//   ]
// );
// Create a JSX element and render it
// const header = (
//   <div >
//     <h1>h1</h1>
//     <h2>h2</h2>
//     <h3>h3</h3>
//   </div>
// );
// Create a functional Component of the same with JSX
// function Header() {
//   return (
//     <>
//       <div>
//         <h1>h1</h1>
//         <h2>h2</h2>
//         <h3>h3</h3>
//       </div>
//     </>
//   );
// }
// Pass Attributes into hte tag in JSX
// function Header() {
//   return (
//     <>
//       <div>
//         <h1 style={{ color: "red" }}>h1</h1>
//         <h2>h2</h2>
//         <h3>h3</h3>
//       </div>
//     </>
//   );
// }
// Composition of Component (Add a component inside another)
function Compo() {
  return (
    <>
      <h1>Component</h1>
    </>
  );
}
function Header() {
  return (
    <>
      <div>
        <Compo />
        <h1 style={{ color: "red" }}>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
// root.render(Compo>);
