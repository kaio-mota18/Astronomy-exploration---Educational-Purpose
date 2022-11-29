import './link.css'
import React from 'react'
import { SiNasa } from 'react-icons/si'

function LinkToContent(props) {
  return (
    <div className="link-description">
      <p className="link-text">
        <SiNasa className="icons" />:
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {' '}
          {props.link}
        </a>
      </p>
    </div>
  )
}

export default LinkToContent
