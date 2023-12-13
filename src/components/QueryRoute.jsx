import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


export const QueryRoute = ({ element }) => {
    const navigate = useNavigate();
    const query = useQuery();

    useEffect(() => {
        const id = query.id;
        if(!id) return navigate("/");
    }, [navigate, query.id])

    return element;
};