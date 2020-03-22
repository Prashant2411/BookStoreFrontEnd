import React from 'react';
import './App.css';
import BookStoreFronPage from './components/BookStoreFronPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={BookStoreFronPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
