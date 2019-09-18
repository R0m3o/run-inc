import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Logo from './assets/images/runinc_logo.svg';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>  
        <div className="App">
          <header className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <img src={Logo} alt="logo"/>
              </div>
              <div className="col-md-4 offset-md-1">
                <Navbar/>
              </div>
              <div className="col-md-4">
                <Searchbar/>
              </div>
            </div>
          </header>
          <main className="container-fluid">
              <Route exact path='/' component={Home}/>
              <Route path='/Events' component={Events}/>
              <Route path='/Shop' component={Shop}/>
              <Route path='/Contact' component={Contact}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
