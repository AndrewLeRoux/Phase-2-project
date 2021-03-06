import React, { useState } from "react";


function Form({onAddRower}){


const [formData, setFormData] = useState({
    "name": "",
    "hometown": "",
    "college": "",
    "image": "",
    "employer": "",
    "collegeResults": "",
    "nationalTeamResults": "",
    "facts": ""
  })

  function handleChange(e){
      const name = e.target.name
      const value = e.target.value

      setFormData({
        ...formData,
        [name]: value 
      })
  }

  function handleSubmit(e) {
    e.preventDefault();



    fetch("http://localhost:3000/rowers",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newRower) => {
        onAddRower(newRower)
        setFormData({
            "name": "",
            "hometown": "",
            "college": "",
            "image": "",
            "employer": "",
            "collegeResults": "",
            "nationalTeamResults": "",
            "facts": ""
          })
    });



  }

    return(
    <div className = "form-container">
        <h1>New Athlete Form</h1>
        <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
        />
        <br/>
        <input
            type="text"
            name = "hometown"
            placeholder="Hometown..."
            onChange={handleChange}
            value={formData.hometown}
        />
        <br/>
        <input
            type="text"
            name = "college"
            placeholder="College..."
            onChange={handleChange}
            value={formData.college}
        />
        <br/>
        <input
            type="text"
            name = "image"
            placeholder="Image URL..."
            onChange={handleChange}
            value={formData.image}
        />
        <br/>
        <input
            type="text"
            name = "employer"
            placeholder="Employer(s) and Job Title..."
            onChange={handleChange}
            value={formData.employer}
        />
        <br/>
        <input
            type="text"
            name = "collegeResults"
            placeholder="Collegiate Results..."
            onChange={handleChange}
            value={formData.collegeResults}
        />
        <br/>
        <input
            type="text"
            name = "nationalTeamResults"
            placeholder="National Team Results..."
            onChange={handleChange}
            value={formData.nationalTeamResults}
        />
        <br/>
        <input
            type="text"
            name = "facts"
            placeholder="Facts/Hobbies..."
            onChange={handleChange}
            value={formData.facts}
        />
        <br/>
        <button type="submit">Add Rower</button>
        </form>
    </div>
    )
    

}

export default Form