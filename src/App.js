import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <Router>
       <Navbar></Navbar>
       <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
