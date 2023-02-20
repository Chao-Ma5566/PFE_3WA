import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Router from "./components/Router.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
