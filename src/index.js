import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/HelloWorld.js";
import HelloWorld from "./components/HelloWorld.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
    <HelloWorld />
 </React.StrictMode>
);

