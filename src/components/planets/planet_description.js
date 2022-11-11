import React from 'react'
import Image from '../shared/images/img'
import Link from '../shared/link/links'
import './style.css'
import { useState } from 'react'
import { useEffect } from 'react'

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json()
  return data
}

function PlanetDescription(props) {
  const [satellites, setSatellites] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    getSatellites(props.name).then(data => {
      setSatellites(data['satellites'])
    })
  })

  function showContent() {
    setShow(true)
  }

  function hideContent() {
    setShow(false)
  }

  if (show === false) {
    return (
      <div className="container">
        <section className="grid-container">
          <div className="main-content">
            <div className="card">
              <h4 className="card-title">{props.name}</h4>
              <Image img_url={props.img_url} />
              <details>
                <summary>Satellites</summary>
                <ol>
                  {satellites.map((satellite, index) => (
                    <li key={index}>{satellite.name}</li>
                  ))}
                </ol>
              </details>
              <p className="card-description">{props.description}</p>
              <button className="btt" onClick={showContent}>
                Show content
              </button>
              <Link link={props.link} />
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className="container">
        <section className="grid-container">
          <div className="main-content">
            <div className="card">
              <h4 className="card-title">{props.name}</h4>
              <Image img_url={props.img_url} />
              <details>
                <summary>Satellites</summary>
                <ol>
                  {satellites.map((satellite, index) => (
                    <li key={index}>{satellite.name}</li>
                  ))}
                </ol>
              </details>
              <p className="card-description-blurless">{props.description}</p>
              <button className="btt" onClick={hideContent}>
                Hide content
              </button>
              <Link link={props.link} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PlanetDescription
