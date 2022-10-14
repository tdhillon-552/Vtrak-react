import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import DownedVehs from './views/DownedVehs'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/downedvehs' element={<DownedVehs />} />

    </Routes>
    </>

  );
}

export default App;
