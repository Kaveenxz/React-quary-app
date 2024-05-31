import { useState } from "react";
import People from "./components/People";
import Plannet from "./components/Plannet";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState('planets')
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {
          page === 'planets' ? <Plannet/> : <People/>
        }
      </div>
    </div>
  );
}

export default App;
