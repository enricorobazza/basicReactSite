import styled from 'styled-components';
import { screenSizes } from '../../settings';

export const Container = styled.div`
background-color:${props => props.color || "white"};
display:flex;
flex-direction: row;
align-items: stretch;
padding: 0;

@media(max-width:${screenSizes.xsmall}px){
    flex-direction: column;
}
`;

export const Box = styled.div`
flex:1;
paddding:0;
`;

export const BoxText = styled.div`
padding: 0 18px;
`;

export const Image = styled.img`
width: 100%;
height: auto;
`;

export const Title = styled.h1`
padding-top:0;
font-size:30px;
color: #47b8e0;
text-shadow: .5px 1px grey;
font-weight: 300;

@media(max-width:${screenSizes.large}px){
    font-size: 24px;
}

@media(max-width:${screenSizes.medium}px){
    font-size:18px;
}

@media(max-width:${screenSizes.xsmall}px){
    font-size:24px;
}
`;

export const Text = styled.div`
padding-bottom:30px;
font-size: 16px;

@media(max-width:${screenSizes.large}px){
    font-size: 12px;
}

@media(max-width:${screenSizes.medium}px){
    font-size: 10px;
}

@media(max-width:${screenSizes.small}px){
    font-size: 10px;
}

@media(max-width:${screenSizes.xsmall}px){
    font-size: 12px;
}
`;

export const Frame = styled.iframe`
width: 100%;
border: 0;
height: 500px;

@media(max-width:${screenSizes.large}px){
    height: 300px;
}

@media(max-width:${screenSizes.medium}px){
    height: 300px;
}

@media(max-width:${screenSizes.small}px){
    height: 200px;
}

@media(max-width:${screenSizes.xsmall}px){
    height: 300px;
}
`;
