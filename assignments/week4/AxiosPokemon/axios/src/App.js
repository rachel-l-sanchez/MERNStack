import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((res)=> {
      setList(res.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="d-inline-flex flex-column col-md-12">
    {
      list.map((pokemon)=> (
        <div>
          <h2 className="d-flex justify-content-center">{pokemon.name}</h2>
        </div>
    ))
    };
    </div>
  )
}

export default App;
