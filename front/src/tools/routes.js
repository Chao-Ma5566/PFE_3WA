import AddArticle from "../components/AdminPage/AddArticle.jsx"
import AdminArticles from "../components/AdminPage/AdminArticles.jsx"
import Article from "../components/Article.jsx"
import Error404 from "../components/Error404.jsx"
import Login from "../components/Login.jsx"
import Logout from "../components/Logout.jsx"
import Profil from "../components/Profil.jsx"
import Register from "../components/Register.jsx"
import UpdateArticle from "../components/AdminPage/UpdateArticle.jsx"
import UpdateArticlePhoto from "../components/AdminPage/UpdateArticlePhoto.jsx"
import UpdatePassword from "../components/UpdatePassword.jsx"
import UpdateProfil from "../components/UpdateProfil.jsx"
import UpdateRole from "../components/AdminPage/UpdateRole.jsx"
import UserList from "../components/AdminPage/UserList.jsx"
import AddProduct from "../components/AdminPage/AddProduct.jsx"
import AddCollection from "../components/AdminPage/AddCollection.jsx"
import CollectionList from "../components/AdminPage/CollectionList.jsx"
import UpdateCollection from "../components/AdminPage/UpdateCollection.jsx"
import ProductsList from "../components/AdminPage/ProductsList.jsx"



const routesUser = [
    {path:"login", component:<Login />},
    {path:"register", component:<Register />},
    {path:"profil/:userId", component:<Profil />, auth:"user"},
    {path:"updateProfil/:userId", component:<UpdateProfil />, auth:"user"},
    {path:"updatePassword/:userId", component:<UpdatePassword />, auth:"user"},
    {path:"logout", component:<Logout />, auth:"user"},
    {path:"article/:articleId", component:<Article />},
    {path:"*", component:<Error404 />}
]

const routesAdmin = [
    {path:"/admin/users", component:<UserList />, auth:"admin"},
    {path:"/admin/roles", component:<UpdateRole />, auth:"admin"},
    {path:"/admin/articles", component:<AdminArticles />, auth:"admin"},
    {path:"/admin/collection", component:<CollectionList />, auth:"admin"},
    {path:"/admin/produits", component:<ProductsList />, auth:"admin"},
    {path:"/admin/addArticle", component:<AddArticle />, auth:"admin"},
    {path:"/admin/addCollection", component:<AddCollection />, auth:"admin"},
    {path:"/admin/addProduct", component:<AddProduct />, auth:"admin"},
    {path:"/admin/updateArticle/:articleId", component:<UpdateArticle />, auth:"admin"},
    {path:"/admin/updateArticlePhoto/:articleId", component:<UpdateArticlePhoto />, auth:"admin"},
    {path:"/admin/updateCollection/:collectionId", component:<UpdateCollection />, auth:"admin"},
]



export {routesUser, routesAdmin} 