import PlanetShotDescription from './planets/planet_short_description'
import './components.css'
import React from 'react'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Form from './form/form'
import Header from './header/header'
import Footer from './shared/footer/footer'

async function getPlanets(id) {
  let response = await fetch(`http://localhost:3000/api/planets.json`)
  let data = await response.json()
  return data
}

function Planets() {
  // O método a seguir set o state que será utilizado e, também, indica qual a função será utilizada para alterar esse estado. O useState é o valor inicial do meu estado.
  const [planets, setPlanets] = useState([])

  // Utiliza-se o useEffect para que possa consumir a API que vem de uma Promise acima e fora do escopo da função Planets. E da aplicação do useEffect permitir  que execute efeitos colaterais, prmises, como é o caso ao consumir uma API e modificar o DOM.

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  })

  return (
    <div className="body-short-description">
      <Fragment>
        <Header />
        <div className="grid-container">
          {planets.map(planet => (
            <PlanetShotDescription
              key={planet.id}
              name={planet.name}
              img_url={planet.img_url}
            />
          ))}
        </div>
        <div className="form">
          <Form />
        </div>

        <Footer />
      </Fragment>
    </div>
  )
}

export default Planets
