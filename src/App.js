import './App.css';
import Nav from './navbar.js'
import Preview from './preview.js'
function App() {

  return (
    <div className="App" id="App">
      <Nav />
      <Preview title="Brave" rank="5. Suosituin sarja tänään" description="Punatukkainen likka seikkailee jousipyssyn kanssa, ihan loistavaa"/>
      
    </div>
  )
  
}

export default App;
