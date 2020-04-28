import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import styled from "styled-components";
import Card from "./Components/Card";
import Form from './Components/Form';



const startUpTeam = [
  {id: uuid(), fName: 'Jane', lName: 'Doe', job: 'Web designer', email: 'JaneD1234@gmail.com'},

  {id: uuid(), fName: 'John', lName: 'Doe', job: 'Head of Marketing', email: 'JohnDoeMarketing@gmail.com'},
];

function App() {
  const [team, setTeam] = useState(startUpTeam);
  console.log(team)
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Card team={team}/>  
      <Form team={team} setTeam={setTeam} />
    </div>
  );
}

export default App;
