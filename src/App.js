import React from 'react';
import AddStudent from './Student/AddStudent';
import StudentList from './Student/StudentList';
import EditStudent from './Student/EditStudent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse"></div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/AddStudent'} className="nav-link">
                Add Student
            </Link>
            </li>
            <li className="nav-item">
              <Link to={'/StudentList'} className="nav-link">
                Student List
            </Link>
            </li>

          </ul>
        </nav>
        <br />
        <Switch>
          <Route exact path="/AddStudent" component={AddStudent} />
          <Route path="/edit/:id" component={EditStudent} />
          <Route path="/StudentList" component={StudentList} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
