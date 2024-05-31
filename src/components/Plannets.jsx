import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet';

const fetchPlannets = async ({ queryKey }) => {
    const [_, page] = queryKey; 
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return res.json();
};
function Plannets() {
    const [page, setPage] = useState(1)
    const {data, status} = useQuery(['plannets', page], fetchPlannets)
  return (
    <div>
        <h2>Planets</h2>
        <button onClick={()=> setPage(1)}>page 1</button>
        <button onClick={()=> setPage(2)}>page 2</button>
        <button onClick={()=> setPage(3)}>page 3</button>

        {status === 'loading' && (
            <div>Loading data...</div>
        )}
        {status === 'error' && (
            <div>Error fetching data...</div>
        )}
        {status === 'success' && (
            <div>
                {data.results.map(plannet => <Planet planet={plannet} key={plannet.name}/>)}
            </div>
        )}
    </div>
  )
}

export default Plannets