import React from 'react';
import logo from './logo.svg';
import './App.css';
import Presentation from './components/Presentation';

const name = "Maxi Simonazzi";
const role = "Front End Developer";
const resume = "Actualmente estoy rompiendo las pelotas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Presentation
          name={name}
          role={role}
          resume={resume}
        />
      </header>
    </div>
  );
}

export default App;
