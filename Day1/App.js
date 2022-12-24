const heading1 = React.createElement("h1", {}, "heading 1");
const heading2 = React.createElement("h2", {}, "heading 2");

const divu = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divu);
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// document.getElementById("root").appendChild(heading);
