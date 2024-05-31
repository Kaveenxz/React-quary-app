import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet';

const fetchPlannets = async ()=>{
    const res =  await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

function Plannets() {
    const {data, status} = useQuery('plannets', fetchPlannets)
    console.log(data)
  return (
    <div>
        <h2>Planets</h2>
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