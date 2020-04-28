import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
box-sizing: border-box;
width: 300px;
height: 200px;
border: 2px ridge grey;
margin: 1%;
`;
const CardGrid = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Card = (props) => {
    console.log(props)
    return (
        <CardGrid>
            {props.team.map(member => {
                return(
                <CardWrapper>
                    <h2>{member.fName} {member.lName}</h2>
                    <h3>{member.job}</h3>
                    <h3>{member.email}</h3>
                </CardWrapper>)
            })}
        </CardGrid>
    )
}


export default Card;