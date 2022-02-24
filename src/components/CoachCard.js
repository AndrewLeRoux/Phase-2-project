import React from "react";

function CoachCard({coach}){

    const {name, image, coachingExperience, facts} = coach

    

    return (
        <div className="card">
            <img src = {image} alt = {name}/>
            <h2>{name}</h2>
            <p><strong>Prior Coaching Experience: </strong>{coachingExperience}</p>
            <p><strong>Achievements: </strong>{facts}</p>
        </div>
        
    )
}

export default CoachCard