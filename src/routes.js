import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import ErrorPage from "./components/ErrorPage";

export const routes = [
    {path: '', component: Home},
    {path: '/contacts', component: Contacts},
    {path: '/projects', component: Projects},
    {path: '*', component: ErrorPage},
]
