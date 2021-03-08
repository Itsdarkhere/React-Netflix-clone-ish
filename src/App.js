import './App.css';
import Gategories from './gategories';
import Nav from './navbar.js'
import Preview from './preview.js'
import { useEffect, useState } from 'react'

function App() {
  const [movie, setMovie] = useState(['Tron', '1. Suosituin elokuva tänään', 
  'Man rides cool fucking motorcycles and fucks a lot']);


  const preview = [['Tron', '1. Suosituin elokuva tänään', 'Man rides cool fucking motorcycles and yeah'],
   ['Brave', '4. Suosituin Elokuva tänään', 'Punatukkainen tyttö seikkailee jousipyssyn kanssa, ihan loistavaa' ]];

  useEffect(() => {
    let interval = setInterval(() => {
      setMovie(movie[0] == 'Tron' ? preview[1] : preview[0]);
    }, 5000)
    return () => clearInterval(interval);
  })


  return (
    <div className="App" id="App">
      <Nav />
      <Preview info={movie}/>¨
      <Gategories />
    </div>
  )
  
}

export default App;
