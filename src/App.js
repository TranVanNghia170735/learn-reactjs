import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Nghia';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tran Van Nghia
        </p>
        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p> Male </p>}
        {!isMale && <p> Female </p>}

        {isMale && (
          <div>
            <p> Male1</p>
            <p> Male1</p>
            <p> Male1</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p> Male 1</p>
            <p> Male 2</p>
            <p> Male 3</p>
          </React.Fragment>


        )}

        {isMale && (
          <>
            <p> Male 1</p>
            <p> Male 2</p>
            <p> Male 3</p>
          </>


        )}

        <p>{student.name}</p>

      </header>
    </div>
  );
}

export default App;
