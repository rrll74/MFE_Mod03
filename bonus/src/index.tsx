import "./mystyles.scss";
import logoImg from "./content/logo_1.png";

import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

// const user = "John Doe";

// console.log(`Hello ${user}!`);
// console.log("Using Vite");

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(<HelloComponent />);
