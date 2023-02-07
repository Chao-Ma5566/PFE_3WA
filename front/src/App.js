import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Register from "./components/Register.jsx"

function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
