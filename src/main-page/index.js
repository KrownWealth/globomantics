import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';




function App() { 
const [allHouses, setAllHouses ] = useState([]);


 useEffect(() => {
  const fetchHouse = async () =>{
    const response = await fetch("/houses.json");
    const houses = await response.json();
    setAllHouses(houses);
  };
  fetchHouse();
 }, []);

 // useMemo hook
const  featuredHouse = useMemo(() => {
  if(allHouses.length){
    const randomIndex = Math.floor(Math.random()* allHouses.length);
    return allHouses[randomIndex];
   }
}, [allHouses]);


  return (
  <Router>
      <div className="container">
      <Header  subtitle="Providing houses all over the world" />
      <Switch>
        <Route path="/">
          <FeaturedHouse  house={featuredHouse}></FeaturedHouse>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
