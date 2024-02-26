import React from 'react'
import PropTypes from 'prop-types';
import {About} from './About';
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
  <a className="navbar-brand" href="/">  { props.title}</a>
  <div className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <ul className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
      <li className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
 </div>

    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form> */}
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>

        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable light mode</label>

      </div>

   
</nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText : PropTypes.string
}

