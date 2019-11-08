import styled from 'styled-components';
import { screenSizes } from './../../settings';

export const Background = styled.div`
    background-color: #34495e;
    padding: 50px 0px;

    @media(max-width:${screenSizes.small}px){
        padding: 10px 0px;
    }
`;

export const Container = styled.div`
    text-align:center;
    padding:20px
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    flex-direction: column;
    margin:0 auto;

    @media(max-width:${screenSizes.small}px){
        width: 70vw;
    }
`;

export const Title = styled.h1`
    font-weight: 300;
    color: white;
    text-align:left;
    width: 50vw;

    @media(max-width:${screenSizes.small}px){
        width: 70vw;
    }
`;

export const InputContainer = styled.div`
    padding-bottom: 15px;
    padding-top: ${props => props.first ? "0": "15px"};
    width: 50vw;
    display: flex;


    @media(max-width:${screenSizes.small}px){
        width: 70vw;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 15px 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
`;

export const Button = styled.button`
    width: 100%;
    border: 0;
    padding: 20px 10px;
    font-size: 16px;
    background-color: ${props => props.disabled ? "#ccc" : "#f1c40f"};
    color: #333;
    border-radius: 5px;
    cursor:  ${props => props.disabled ? "default" : "pointer"};
`;


export const MessageOK = styled.span`
    color: #2ecc71;
    font-size:14pt;
`;

export const MessageERROR = styled.span`
    color: #e74c3c;
    font-size:14pt;
`;

export const Message = styled.span`
    font-size:14pt;
    color: white
`;