import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Link } from "react-router-dom";
import "./navigation.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function Navigation() {

  return (
    <div>
      {/*<div className="navigation">
        <div className="navMenu">
          <NavLink className="link" activeClassName="is-active" to="/" exact> Home </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/benefits"> Benefits </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/events"> Events </NavLink>        
          {/* <NavLink className="link" activeClassName="is-active" to="/team"> Team </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/contact"> Contact </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/blogs"> Blogs </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/feedback"> Feedback </NavLink>
        </div>
      </div>*/}

      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="link" activeClassName="is-active" to="/" exact> Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="link" activeClassName="is-active" to="/benefits"> Benefits </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="link" activeClassName="is-active" to="/events"> Events </NavLink>
              </li>
              {/*<li class="nav-item">
                <a class="nav-link active" href="/contact" tabindex="-1" aria-disabled="true">Contact</a>
              </li>*/}
              <li class="nav-item">
                <NavLink className="link" activeClassName="is-active" to="/blogs"> Blogs </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="link" activeClassName="is-active" to="/feedback"> Feedback </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div>
        <img src={ Img } alt="" />
        <p className="logo-name">ORANGE CAPS</p>
      </div> */}
    </div>
  )
}

export default Navigation
