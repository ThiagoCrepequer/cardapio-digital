import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cardapio } from "./pages/Cardapio";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Admin } from "./pages/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cardapio",
        element: <Cardapio />,
        children: [
            {
                path: "cardapio/:id",
                element: <Cardapio />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />
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