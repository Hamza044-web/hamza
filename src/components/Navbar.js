import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
 
  return (
  
   <>
   <div className={`container-fluid bg-${props.mode} navbar-${props.mode}`}>
    <nav className="navbar navbar-expand-lg   " >
 
   <Link className={`navbar-brand  text-center text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
       </li>
       <li className="nav-item">
         <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.about}</Link>
       </li>
       
      
     </ul>
     <form className="d-flex" role="search">
     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togmodeG} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     </form>
     <form className="d-flex" role="search">
     <div className="form-check form-switch mx-3 text-dark">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Yellow Mode</label>
</div>
     </form>
     <form className="d-flex" role="search">
     <div className="form-check form-switch mx-3 text-dark">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
</div>
     </form>
     <form className="d-flex" role="search">
     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togmode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     </form>
   </div>
   </nav>
 </div>

</>

  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
    
}
Navbar.defaultProps={
    title: 'Title Text',
    about: 'About Text'
}