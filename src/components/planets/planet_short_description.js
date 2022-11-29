import React from 'react'
import Image from '../shared/images/img'
import './style.css'
import { GoRocket } from 'react-icons/go'

// Por opção do desenvolvedor foi-se utlizado o component Link. Entretanto, cabe salientar que este component poderia ser substituído pelo hook useNavigate o qual você precisa declarar uma variável que receberá o parêmetro.
// Depois, basta criar uma função que utilizará a variável declarada anteriormente e terá na sequência, dentro de parênteses, o caminho que foi definido em routes.
// Exemplo let navigate = useNavigate()
// const home = ()=>{navigate('/caminho')}
import { Link } from 'react-router-dom'

function PlanetShotDescription(props) {
  return (
    <div className="container-short-description">
      <div className="card-short-description">
        <h4 className="card-title-short-description">{props.name}</h4>
        <Image img_url={props.img_url} />

        <Link to={`/planet/${props.name}`}>
          <button type="button" className="btt-short-description">
            Explore this planet <GoRocket className="icon-rocket" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PlanetShotDescription
