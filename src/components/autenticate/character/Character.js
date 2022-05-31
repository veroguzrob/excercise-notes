import './Character.css'
import Data from '../../../Data.js'

function Character({logOut}) {
  return (
    <div className='container-character'>
      <button onClick={()=>{logOut()}}>Log Out</button>
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