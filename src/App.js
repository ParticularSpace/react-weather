import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
