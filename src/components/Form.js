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
    return(
    <>
        <h1>Form</h1>
    </>
    )
    

}

export default Form