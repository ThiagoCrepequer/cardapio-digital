import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import axios from "../services/axios";

export function Item() {
    const location = useLocation();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const id = location.pathname.split('/')[2];
        axios.get('/cardapio/' + id).then((response) => {
            console.log(response)
            setItem(response.data);
        });
    }, [location.pathname]);

    return (
        <div className="fixed w-full h-full flex justify-center items-center">
            {item && (
                <div className="relative bg-zinc-900 w-[90%] h-[90%] flex justify-around items-center">
                    <Link to="/cardapio" className="absolute top-0 right-0">
                        fechar
                    </Link>
                    <div>
                        <h2 className="text-3xl">{item.title}</h2>
                        <p className="text-2xl">{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <img src={item.image} alt={item.title} />
                    </div>
                </div>
            )}
        </div>
    )
}