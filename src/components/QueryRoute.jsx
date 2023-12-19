import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "../hooks/useCookies";


export const QueryRoute = ({ element }) => {
    const navigate = useNavigate();
    const query = useCookies();

    useEffect(() => {
        const id = query.id;
        if(!id) return navigate("/");
    }, [navigate, query.id])

    return element;
};