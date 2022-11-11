import './link.css'
import React from 'react'

function Link(props) {
  return (
    <div className="link-description">
      <p>
        Link:
        <a href={props.link}> {props.link}</a>
      </p>
    </div>
  )
}

export default Link
