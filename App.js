import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
console.log(heading);

const HeadingComponent=()=>{
    return <h1>Hello World</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
