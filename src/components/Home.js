import React, {useState, useEffect} from "react";
import bear from '../bear_logo.png'
import CoachCard from "./CoachCard"

function Home(){

    const [staff, setStaff] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/staff")
            .then((r) => r.json())
            .then((res) => setStaff(res));
        }, []);
  

    return(
    <div className="homepage">
        <img src={bear} className ='bearLogo'></img>
        <br/>
        <h3>About CRC</h3>
        <p>The California Rowing Club exists to provide athletes with an opportunity to develope 
            and train for the Senior Nation Team. Athelete's who make the team will go on to compete 
            at the the World Championships and the Olympics.</p>
        <br/>
        <h3>Staff</h3>
        <div className="cards">
            {staff.map((coach) => {
            return <CoachCard key = {coach.name} coach = {coach}/>
                })}
        </div>
    </div>
    )
}

export default Home