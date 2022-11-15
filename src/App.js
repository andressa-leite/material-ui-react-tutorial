import "./App.css";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
