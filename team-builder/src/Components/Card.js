import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
box-sizing: border-box;
width: 300px;
height: 200px;
border: 4px ridge grey;
margin: 2%;
`;

const Card = (props) => {

    return (
        <CardWrapper>
            <h2>{props.team.fName} {props.team.lName}</h2>
            <h3>{props.team.job}</h3>
            <h3>{props.team.email}</h3>
        </CardWrapper>
    )
}


export default Card;