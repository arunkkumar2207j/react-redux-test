import React from 'react';
import Header from './components/header'
import Headline from './components/headline'
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline header="Post" desc="Click the button to render" />
    </div>
  );
}

export default App;
