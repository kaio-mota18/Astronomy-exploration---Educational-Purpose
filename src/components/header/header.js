import React from 'react'
import { Fragment } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Fragment>
      <div className="header-container">
        <h4 className="main-title-short">Solar System's Planets</h4>

        <nav className="nav-bar">
          <Link to="/">
            <button type="button" className="nav-button-short">
              Home
            </button>
          </Link>
          <Link to="./about">
            <button type="button" className="nav-button-short">
              About the project
            </button>
          </Link>
          <button type="button" className="nav-button-short">
            Contact us
          </button>
        </nav>
      </div>
    </Fragment>
  )
}

export default Header
