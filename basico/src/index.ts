import logoImg from "./content/logo_1.png";
import classes from "./mystyles.scss";

// Insertamos texto en el div y le asignamos la clase del scss modularizado en tiempo de ejecución
const texto = document.getElementById("text");
texto.setAttribute("class", classes.redBackground);
texto.textContent = "Hello World!";

// Insertamos la imagen en el contenedor div en tiempo de ejecución
const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
