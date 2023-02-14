import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import NavBar from "./components/NavBar.jsx"
import Logged from "./components/Logged.jsx"
import AdminHome from "./components/AdminHome.jsx"
import UserList from "./components/AdminPage/UserList.jsx"
import Profil from "./components/Profil.jsx"
import UpdateProfil from "./components/UpdateProfil.jsx"
import UpdateRole from "./components/AdminPage/UpdateRole.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/admin/users" element={<UserList />}></Route>
        <Route path="/profil/:userId" element={<Profil />}></Route>
        <Route path="/updateProfil/:userId" element={<UpdateProfil />}></Route>
        <Route path="/admin/roles" element={<UpdateRole />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
