import React from 'react'
import { useQuery } from 'react-query'

const fetchPlannets = async ()=>{
    const res =  await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

function Plannet() {
    const {data, status} = useQuery('plannets', fetchPlannets)
    console.log(data)
  return (
    <div>Plannet</div>
  )
}

export default Plannet