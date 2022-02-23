import React from "react";

function AthleteCard({rower}){

    const {name, college, image, employer,collegeResults, nationalTeamResults, facts} = rower

    

    return (
        <div className="card">
            <img src = {image} alt = {name}/>
            <h2>{name}</h2>
            <p><strong>College: </strong> {college}</p>
            <p><strong>Employer(s) and Job Title: </strong> {employer}</p>
            <p><strong>Collegiate Results: </strong>{collegeResults}</p>
            <p><strong>National Team Results: </strong>{nationalTeamResults}</p>
            <p><strong>Facts/Hobbies:</strong> {facts}</p>
        </div>
        
    )
}

export default AthleteCard