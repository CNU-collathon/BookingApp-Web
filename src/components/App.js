import React, {useState} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import SignUp from './SignUp';
import SelectPage from './SelectPage';
import SignIn from './SignIn';

const App = () => {

  return (
    <Router>
      <Header></Header>
      <Route exact={true} path="/" component={SignIn}></Route>
      <Route exact={true} path="/SignUp" component={SignUp}></Route>
      <Route exact={true} path="/SignIn" component={SelectPage}></Route>
    </Router>
  )
}

export default App;