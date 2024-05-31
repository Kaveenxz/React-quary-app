export default function Navbar({setPage}) {
  return (
    <nav>
        <button onClick={()=> {setPage('planets')}}>Planets</button>
        <button onClick={()=> {setPage('Peoples')}}>People</button>
    </nav>
  )
}
