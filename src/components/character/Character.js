import './Character.css'
import Gender from './Gender';

function Character ({characters}) {
  let {name, image, gender} = characters
  return (
    <figure className="character">
      <img src={image} alt='' />
      <p> {name} </p>
      <Gender gender = {gender} />
    </figure>

  )
}

export default Character;