import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachData} = props
  const {name, id, teamImageURL} = eachData

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
