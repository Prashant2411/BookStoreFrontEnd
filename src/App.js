import React from 'react';
import './App.css';
import ListOfBooks from './components/ListOfBooks';
import AppBar from './components/AppBar'

function App() {
  return (
    <div>
     <AppBar/>
     <ListOfBooks/>
    </div>
  );
}

export default App;
