// packages/header/src/index.js

import React from "react";
import ReactDOM from "react-dom";
import Header from "header"; 

const App = () => (
  <div>
    <Header />
    <h1>Content Microfrontend</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
