import { Routes, Route } from "react-router-dom";
import Character from "./autenticate/character/Character"
import Login from "./noautenticate/Login";
import { loginWithGoogle, logOut } from '../lib/firebaseAuth'

function Paths({ isAutenticate }) {
  return (
    <section>
      {isAutenticate ?
        <Routes>
          <Route path="/" element={<Character logOut={logOut} />}>
          </Route>
        </Routes> :
        <Routes>
          <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />}>
          </Route>
        </Routes>}
    </section>
  );
}
export default Paths;