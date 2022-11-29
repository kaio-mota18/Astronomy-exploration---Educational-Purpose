import React from 'react'

import './curiosities.css'

function Curiosities(props) {
  return (
    <div className="flex-curiosities">
      <div className="curiosities-items">
        <img
          className="picture-of-curiosity"
          alt="descrição da notícia"
          src={props.link}
        />
        <p className="text-curiosities">{props.news}</p>
      </div>
    </div>
  )
}

export { Curiosities }
