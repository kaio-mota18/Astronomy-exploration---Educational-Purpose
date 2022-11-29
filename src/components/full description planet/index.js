import PlanetFullDescription from './planet_full_description'

import React from 'react'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}

function Planet() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanet().then(data => {
      setPlanets(data['data'])
    })
  })

  return (
    <Fragment>
      <PlanetFullDescription
        key={planets.id}
        name={planets.name}
        img_url={planets.img_url}
        description={planets.description}
        link={planets.link}
      />
    </Fragment>
  )
}

export default Planet
