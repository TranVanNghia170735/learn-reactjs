import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeatures from './features/Album';

function App() {

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      <AlbumFeatures />
    </div>
  );
}

export default App;
