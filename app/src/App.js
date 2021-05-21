import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext'
import './App.css';

function App() {
  return (
      <DataContext.Provider>
        <h1>LocalTag Frontend</h1>
      </DataContext.Provider>
  );
}

export default App;
