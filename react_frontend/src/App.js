import './App.css';
import React, { Component } from 'react'; 
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SongView from './SongView';
import CommsTest from './CommsTest';
import Home from './Home';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/" >
  My Music Store
  </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Songs" id="basic-nav-dropdown">
        <NavDropdown.Item href="/LemonTree">
          Lemon Tree
          </NavDropdown.Item>
          <NavDropdown.Item href="/StayinAlive">
          Stayin Alive
          </NavDropdown.Item>
          <NavDropdown.Item href="/SweetChild">
          Sweet Child
          </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route path="/LemonTree">
    <SongView baseUrl = "LemonTree" songKey = "LemonTree" />
  </Route>

  <Route path="/StayinAlive">
    <SongView baseUrl = "LemonTree" songKey = "StayinAlive" />
  </Route>

  <Route path="/SweetChild">
    <SongView baseUrl = "LemonTree" songKey = "SweetChild" />
  </Route>


  <Route path="/testHealth">
    <p>Hello from react frontend</p>
  </Route>

  <Route path="/testCommsApi">
    <CommsTest baseUrl = "testHealth" />
  </Route>

  <Route path="/testCommsJava">
    <CommsTest baseUrl = "testHealth" />
  </Route>

  <Route path="/testCommsPython">
    <CommsTest baseUrl = "testHealth" />
  </Route>

  <Route path="/">
    <Home />
  </Route>

</Switch>

    </div>
    </Router>    
  );
}

export default App;
