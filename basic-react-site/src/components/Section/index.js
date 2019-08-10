import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color:${props => props.color || "black"};
    display:flex;
    flex-direction: row;
    align-items: stretch;
`;

const Box = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;


function Section(props){
    const {section} = props;
    return(
        <>
            <Container color={section.color}>
                {!props.left && <Box><Image src={section.images[0]} /></Box>}
                <Box>
                    <h1>{section.title}</h1>
                    <span>{section.text}</span>
                </Box>
                {props.left && <Box><Image src={section.images[0]} /></Box>}
            </Container>
        </>
    );
}

export default Section;