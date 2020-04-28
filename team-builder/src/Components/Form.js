import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const Form = ({team, setTeam}) => {

const [member, setMember] = useState({fName: "", lName: "", job: "", email: "" })
const [data, setData] = useState('')

const handleChanges = (event) => {
    setMember({...member, [event.target.name]: event.target.value});
};

const submitForm = event => {
    event.preventDefault();

    setTeam([...team, {...member, id: uuid() }]);
    setMember({fName: "", lName: "", job: "", email: "" });

    console.log(team);
};

    return(        
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="fName">First Name</label>
                <input 
                id="fName"
                name="fName"
                type="text"
                value={member.fName}
                placeholder="First name"
                onChange={handleChanges}/>


                <label htmlFor="lName">Last Name</label>
                <input 
                id="lName" 
                name="lName"
                type="text" 
                value={member.lName}
                placeholder="Last name"
                onChange={handleChanges} />

                <label htmlFor="job">Job Title</label>
                <input
                id="job"
                name="job"
                type="type"
                value={member.job}
                placeholder="Job title"
                onChange={handleChanges} />

                <label html="email">Email</label>
                <input
                id="email"
                name="email"
                type="text"
                value={member.email}
                placeholder="Email"
                onChange={handleChanges} />           

            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;