import React from 'react';
import Header from './components/header'
import Headline from './components/headline'
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline headline="Posts" desc="Click to the button to render posts" />
    </div>
  );
}

export default App;
