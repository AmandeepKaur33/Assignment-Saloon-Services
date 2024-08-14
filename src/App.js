import React from 'react';
import './App.css';
import CategoryServices from './Components/Category';
// import Tabs from './Components/Category/Sections/Tabs';

const App = () => {
  return (
    <div className='App'>
      <h1 className='title'>Select services</h1>
      <CategoryServices/>
      {/* <Tabs/> */}
    </div>
  )
}

export default App