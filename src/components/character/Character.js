import './Character.css'

function Character ({characters}) {
  let {name, image} = characters
  return (
    <figure className="character">
      <img src={image} alt=''/>
      <p> {name} </p>
    </figure>
  )
}

export default Character;