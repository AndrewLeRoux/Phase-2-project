import '../App.css';
import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import AthleteBios from "./AthleteBios";
import NavBar from "./NavBar";
import Form from "./Form";

function App() {

  const [rowers, setRowers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/rowers")
      .then((r) => r.json())
      .then((res) => setRowers(res));
    }, []);
  


    function handleAddRower(newRower){
      const updatedRowers = [...rowers, newRower]
      setRowers(updatedRowers)
    }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/athletebios">
          <AthleteBios rowers = {rowers}/>
        </Route>
        <Route exact path="/form">
          <Form onAddRower = {handleAddRower}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    
  )
}

export default App;
