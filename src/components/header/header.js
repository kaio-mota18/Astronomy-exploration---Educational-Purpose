import React from 'react'
import { Fragment } from 'react'
import './header.css'

function Header() {
  return (
    <Fragment>
      <div className="header-container">
        <h4 className="main-title">Solar System's Planets</h4>

        <nav className="nav-bar">
          <button type="button" className="nav-button">
            Home
          </button>
          <button type="button" className="nav-button">
            About the project
          </button>
          <button type="button" className="nav-button">
            Contact us
          </button>
        </nav>
      </div>
    </Fragment>
  )
}

export default Header
