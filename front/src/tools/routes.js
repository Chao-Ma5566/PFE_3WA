import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import Login from "../components/Login.jsx"
import Profil from "../components/Profil.jsx"
import Register from "../components/Register.jsx"
import AdminHome from "../components/AdminHome.jsx"
import UserList from "../components/AdminPage/UserList.jsx"
import UpdateProfil from "../components/UpdateProfil.jsx"
import UpdateRole from "../components/AdminPage/UpdateRole.jsx"
import UpdatePassword from "../components/UpdatePassword.jsx"
import Logout from "../components/Logout.jsx"
import AdminArticles from "../components/AdminPage/AdminArticles.jsx"
import AddArticle from "../components/AdminPage/AddArticle.jsx"
import Article from "../components/Article.jsx"

const routes = [
    {path:"/admin", component:<AdminHome />, auth:"admin"},
    {path:"/admin/users", component:<UserList />, auth:"admin"},
    {path:"/admin/roles", component:<UpdateRole />, auth:"admin"},
    {path:"/admin/articles", component:<AdminArticles />, auth:"admin"},
    {path:"/admin/addArticle", component:<AddArticle />, auth:"admin"},
    {path:"/", component:<Home />},
    {path:"/login", component:<Login />},
    {path:"/register", component:<Register />},
    {path:"/profil/:userId", component:<Profil />, auth:"user"},
    {path:"/updateProfil/:userId", component:<UpdateProfil />, auth:"user"},
    {path:"/updatePassword/:userId", component:<UpdatePassword />, auth:"user"},
    {path:"/logout", component:<Logout />, auth:"user"},
    {path:"/article/:articleId", component:<Article />},
    {path:"*", component:<Error404 />}
]

export default routes