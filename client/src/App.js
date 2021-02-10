import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import SavedPage from './pages/SavedPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
   <Router>
      <Navbar />
      <main>
        <Jumbotron />
        <Switch>
          <Route exact path={[ "/", "/search" ] }component={SearchPage} />
          <Route exact path="/saved" component={ SavedPage } />
        </Switch>
      </main>
   </Router>
   
  );
}

export default App;
