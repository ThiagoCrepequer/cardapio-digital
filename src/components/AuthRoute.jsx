import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthRoute = ({ element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if(!token) return navigate("/login");
    }, [navigate])

    return element;
};