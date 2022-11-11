import './style.css'
import React from 'react'

function Image(props) {
  return (
    <>
      <img
        className="image-card"
        src={props.img_url}
        alt="Imagem dos planetas"
      />
    </>
  )
}

export default Image
