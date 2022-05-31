import { useState } from 'react';
import './App.css';
import Paths from './components/Paths';
import {BrowserRouter} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const [isAutenticate, setAutenticate] = useState(null);
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setAutenticate(user)
  } else {
    setAutenticate(null)
  }
});
  return (
    <main>
      <BrowserRouter> <Paths isAutenticate={isAutenticate} /> </BrowserRouter>
    </main>
  );
}

export default App;
