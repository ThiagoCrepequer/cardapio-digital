import { useEffect, useState } from 'react'
import axios from '../services/axios'
import { useQuery } from '../hooks/useQuery'

export function Cardapio() {
    const [cardapio, setCardapio] = useState([])
    const query = useQuery();

    useEffect(() => {
        const id = query.id;
        axios.get('/cardapio?id=' + id).then((response) => {
            setCardapio(response.data);
        });
    }, [query.id])

    return (
        cardapio.map((item, key) => (
            <a 
                className=''
                key={key} 
                href={`/cardapio/` + item.uuid}
            >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </a>
        ))
    )
}