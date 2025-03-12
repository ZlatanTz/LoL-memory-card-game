import { useState, useEffect} from 'react'
import Card from './Card.jsx';
import './App.css'
import Header from './Header.jsx';

function App() {
const [champions, setChampions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
        const jsonData = await data.json()
        setChampions(jsonData.data)
      }catch(err) {
        console.log('failed to get api data', err)
        return
      }
    }
    
    fetchData();
  }, [])

  return (
    <>
    <Header/>
    <div className="cards">
      {champions ?
        Object.keys(champions).map((champId) => {
        const champ = champions[champId]
        return <Card name={champ.name} img={champ.image.full} key={champ.key} />
      }): 
      <div>
          Loading...
      </div>
      }
    </div>


    </>
  ) 
}

export default App
