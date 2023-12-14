import { useEffect, useState } from 'react'
import axios from '../services/axios'
import { useQuery } from '../hooks/useQuery'
import { Link, Outlet } from 'react-router-dom';

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
        <section className='flex justify-center gap-8 flex-wrap'>
            {cardapio.map((item, key) => (
                <Link
                    className='relative min-w-[300px] max-w-[400px] flex justify-between p-4 border border-gray-200 rounded hover:bg-zinc-900'
                    key={key}
                    to={`/cardapio/` + item.uuid}
                >
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        <p className='text-gray-400'>{item.price}</p>
                    </div>
                    <img src={item.image}  className='max-w-[100px] max-h-[100px]'/>
                </Link>
            ))}

            <Outlet />
        </section>
    )
}