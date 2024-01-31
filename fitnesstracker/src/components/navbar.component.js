import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{ width: '118.55%', right:"9.3%" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Fitness Tracker</Link>
          <div className="collpase navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Exercises</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
