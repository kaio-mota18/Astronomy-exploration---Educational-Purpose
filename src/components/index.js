import PlanetDescription from './planets/planet_description'
import './components.css'
import React from 'react'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Form from './form/form'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
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

  // Aliarei a manipulação do array planets, que consome uma API, junto com o uso de um componente importado que criar cards. A API fornecerá os valores e dados que serão inseridos no seu componente.
  return (
    <Fragment>
      <h4 className="main-title">Planets' List</h4>

      {planets.map(planet => (
        <PlanetDescription
          key={planet.id}
          name={planet.name}
          img_url={planet.img_url}
          description={planet.description}
          link={planet.link}
        />
      ))}
      <Form />
      {/* Aqui eu vou criar a sidebar e colocar o componente que ainda vou criar que é esse componente extra
       */}
    </Fragment>
  )
}

export default Planets
