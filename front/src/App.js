import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import NavBar from "./components/NavBar.jsx"
import AdminHome from "./components/AdminHome.jsx"
import UserList from "./components/AdminPage/UserList.jsx"
import Profil from "./components/Profil.jsx"
import UpdateProfil from "./components/UpdateProfil.jsx"
import UpdateRole from "./components/AdminPage/UpdateRole.jsx"
import UpdatePassword from "./components/UpdatePassword.jsx"
import Logout from "./components/Logout.jsx"
import AdminArticles from "./components/AdminPage/AdminArticles.jsx"
import AddArticle from "./components/AdminPage/AddArticle.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/admin/users" element={<UserList />}></Route>
        <Route path="/profil/:userId" element={<Profil />}></Route>
        <Route path="/updateProfil/:userId" element={<UpdateProfil />}></Route>
        <Route path="/admin/roles" element={<UpdateRole />}></Route>
        <Route path="/admin/articles" element={<AdminArticles />}></Route>
        <Route path="/updatePassword/:userId" element={<UpdatePassword />}></Route>
        <Route path="/admin/addArticle" element={<AddArticle />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
