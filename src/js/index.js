//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application

let counter = 0;
const containerContador = ReactDOM.createRoot(document.getElementById('app'))
setInterval ( () => {
    counter ++
    containerContador.render(<SecondsCounter  uno={counter/1}  dos={counter/10} tres={counter/100} cuatro={counter/1000} cinco={counter/10000} seis={counter/10000}/>);
}, 1000); 



