import styled from 'styled-components';
import { screenSizes } from '../../settings';

export const PageTitle = styled.h1`
    color: #444;
    margin-top:100px;
    padding-left: 18px;
    font-weight: 300;
    font-size: 35px;
`;

export const Box = styled.div`
    flex:1;
    paddding:0;
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

export const DivCentered = styled.div`
    text-align:center;
    margin-top:100px;
`;