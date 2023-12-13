import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cardapio } from "./pages/Cardapio";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Admin } from "./pages/Admin";
import { AuthRoute } from "./components/AuthRoute";
import { QueryRoute } from "./components/QueryRoute";
import { Item } from "./pages/Item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cardapio",
        element: <QueryRoute element={<Cardapio />}/>,
        children: [
            {
                path: ":id",
                element: <Item />
            }
        ]
    },
    {
        path: "/admin",
        element: <AuthRoute element={<Admin />} />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    }
])