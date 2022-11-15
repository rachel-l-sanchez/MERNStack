import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((res)=> {
      return res.json()
    }).then((result)=> {
      console.log(result)
      setList(result.results)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <div className="App">
    {
      list.map((pokemon)=> (
        <div>
          <h2>{pokemon.name}</h2>
        </div>
      ))
    }
    </div>
  )
}

export default App;
