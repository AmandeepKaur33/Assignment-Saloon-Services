import React from 'react';
import './App.css';
import CategoryServices from './Components/Category';

const App = () => {
  return (
    <div className='App'>
      <h1 className='title'>Select services</h1>
      <CategoryServices/>
    </div>
  )
}

export default App