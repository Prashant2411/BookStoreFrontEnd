import React from 'react';
import './App.css';
import BookStoreFronPage from './components/BookStoreFronPage'
import OrderSuccessfull from './components/OrderSuccessfull'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <div className="appDiv">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={BookStoreFronPage} />
          <Route path={"/cart"} exact component={Cart} />
          <Route path={"/ordersuccessfull"} exact component={OrderSuccessfull} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
