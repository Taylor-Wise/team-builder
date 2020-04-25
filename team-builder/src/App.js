import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import styled from "styled-components";
import Card from "./Components/Card";
import Form from './Components/Form';

const CardGrid = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const startUpTeam = [
  {id: uuid(), fName: 'Jane', lName: 'Doe', job: 'Web designer', email: 'JaneD1234@gmail.com'},

  {id: uuid(), fName: 'John', lName: 'Doe', job: 'Head of Marketing', email: 'JohnDoeMarketing@gmail.com'},
];

function App() {
  const [team, setTeam] = useState(startUpTeam);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <CardGrid>
        {team.map(team => {
          return(
             <Card team={team}/>
          )
        })}
        
      </CardGrid>
      <Form />
    </div>
  );
}

export default App;
