import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
        <img src="/eviguide_logo.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
    </div>
  );
}

export default App;
