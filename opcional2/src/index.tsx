import "./mystyles.scss";
import logoImg from "./content/logo_1.png";

import { createRoot } from "react-dom/client";
import { HelloComponent } from "./helloComponent.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);

