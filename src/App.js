import React from 'react';
import './App.css';
import BookStoreFronPage from './components/BookStoreFronPage'
import OrderSuccessfull from './components/OrderSuccessfull'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={BookStoreFronPage} />
          <Route path={"/cart"} exact component={Cart} />
          <Route path={"/ordersuccessfull"} exact component={OrderSuccessfull} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
