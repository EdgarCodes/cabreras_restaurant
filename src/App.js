import React from 'react';

import Header from "./Components/Header";
import Footer from "./Components/Footer";

//CSS
import "./Components/css/Styles.css";
import Homepage from './Components/Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
