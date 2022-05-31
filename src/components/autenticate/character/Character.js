import './Character.css'
import Data from '../../../Data.js'

function Character() {
  return (
    <div className='container-character'>
      {Data.results.map(character =>
        <div className="character" key={character.id}>
          <img src={character.image} alt=''/>
          <p> {character.name} </p>
        </div>
      )}
    </div>
  )
}

export default Character;