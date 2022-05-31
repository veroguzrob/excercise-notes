import { Routes, Route } from "react-router-dom";
import Login from "./noautenticate/Login";
import loginWithGoogle from '../lib/firebaseAuth'

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />}>
      </Route>
    </Routes>
  );
}

export default Paths;
