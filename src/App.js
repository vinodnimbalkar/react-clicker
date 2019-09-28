import React from "react";

import Header from './componets/Header';
import Clicker from './componets/Clicker';
import "./App.css";

function App() {
  const title = 'React Clicker';

  return (
    <div>
      <Header title={title} />
      <div className="mt-5">
        <Clicker />
      </div>
    </div>
  );
}

export default App;
