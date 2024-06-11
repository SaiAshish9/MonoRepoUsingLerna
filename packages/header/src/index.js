// packages/header/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => (
  <div>
    <h1>Header Microfrontend</h1>
  </div>
);

// Export the component to be used in other microfrontends
export default Header;

const App = () => <Header />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
