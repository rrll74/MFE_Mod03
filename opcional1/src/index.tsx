import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./HelloComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Webpack practice with React</h1>
    <HelloComponent />
  </div>
);
console.log(`Api base: ${process.env.API_BASE}`);
