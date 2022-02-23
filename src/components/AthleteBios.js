import React from "react";
import AthleteCard from "./AthleteCard"


function AthleteBios({rowers}){

    return(

        <div>
        <h1>Athlete Bio's</h1>
        <div className="cards">
        {rowers.map((rower) => {
        return <AthleteCard key = {rower.name} rower = {rower}/>
            })}
        </div>
        </div>
    
        
    )
    

}

export default AthleteBios