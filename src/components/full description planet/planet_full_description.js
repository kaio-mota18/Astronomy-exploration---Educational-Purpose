import React from 'react'
import LinkToContent from '../shared/link/links'
import { Curiosities } from '../shared/blocks with curiosities/curiosities'
import Footer from '../shared/footer/footer'
import './style_full_description.css'
import { useState, useEffect, Fragment } from 'react'

// Uma alternativa ao hook useNavigate seria o component Link. O component link segue o formato JSX o qual faz com que o usuário utlize a tag. Dentro da tag você colocaria o atributo to='(caminho do arquivo)'
import { useParams, useNavigate } from 'react-router-dom'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}

function PlanetFullDescription() {
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)
  const [curiosities, setCuriosities] = useState([])

  // O hook useParams permite extrair da URL parâmetros da url. No caso, a URL utilizado o parâmetro id que em algum momento terá um valor atribuído. Portanto, como quero utilizar deste mesmo valor do parâmetro em outra parte do meu código, eu declaro como uma variável entre chaves o parâmetro que será extraído.

  let { id } = useParams()

  useEffect(() => {
    getPlanet(id).then(
      data => {
        setPlanet(data['data'])
        setCuriosities(data['curiosities'])
      },
      // Caso haja um erro, ou seja, se for inserido na URL algum ID que não corresponde com nenhum dos ids da api, vai ser chamada a função setRedirect que irá mudar o estado de redirect. Quando redirect receber true, basicamente o caminho dele será alterado para a home page
      error => {
        setRedirect(true)
      }
    )
  })

  // O novo hook useNavigate permite substituir o antigo hook useHistory. Basicamente se declara uma variável para receber esse método. Depois, pode-se utilizar uma função que usa essa variável a qual terá dentro de um par de parênteses o caminho definido em Route

  let navigate = useNavigate()

  function goHome() {
    return navigate('/')
  }

  // Caso redirect haja erro, o estado será alterado para true, como o redirect recebeu true, ele vai chamar o método goHome que tem o caminho para a home page utilizando ali do hook useNavigate
  if (redirect === true) {
    return goHome()
  }

  return (
    <Fragment>
      <div className="backgorund-theme">
        <div className="grid-container-full-description">
          <div className="image-on-left">
            <img
              className="photo-full-description"
              src={planet.img_url}
              alt="portrait of planet"
            ></img>
          </div>

          <div className="content-on-right">
            <div className="container">
              <div className="card">
                <h4 className="card-title">{planet.name}</h4>

                <p className="card-description">{planet.description}</p>
                <LinkToContent link={planet.link} />

                <button onClick={goHome} type="button" className="btt">
                  Back to exploration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-curiosities">
        {curiosities.map(curiosities => (
          <Curiosities link={curiosities.picture} news={curiosities.news} />
        ))}
      </div>
      <Footer />
    </Fragment>
  )
}

export default PlanetFullDescription
