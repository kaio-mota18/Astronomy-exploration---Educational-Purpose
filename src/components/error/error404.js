import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

function PageNotFound() {
  return (
    <Fragment>
      <div className="notfound-container">
        <div className="notfound-flex">
          <h3 className="notfound-info">Page not found</h3>
          <h4 className="notfound-info">o.O</h4>
          <Link to="/home">
            <button className="notfound-btt" type="button">
              Return to exploration
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default PageNotFound
