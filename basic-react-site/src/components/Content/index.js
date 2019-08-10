import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:2000px;
    background-color:${props => props.color || "black"};
`;

function Content(){

    return(
        <>
            <Container color={"yellow"}>Alo</Container>
            <Container color={"pink"}>Alo</Container>
            <Container color={"green"}>Alo</Container>
            <Container color={"pink"}>Alo</Container>
            <Container color={"green"}>Alo</Container>
        </>
    );
}

export default Content;