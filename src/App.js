import './App.css';
import Paths from './components/Paths';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Paths></Paths>
    </BrowserRouter>
  );
}

export default App;
