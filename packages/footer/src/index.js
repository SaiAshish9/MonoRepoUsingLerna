// packages/header/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Footer Microfrontend</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
