import styled from 'styled-components';

export const Background = styled.div`
   display:flex;
   width:100%;
   height:100vh;
   background-color:#3498db;
`;

export const Container = styled.div`
    margin: 10vh auto 0 auto;
    height:70vh;
    width:50vw;
    background-color:rgba(255,255,255,0.7);
    padding: 40px;
`;

export const Title = styled.span`
    font-weight: 300;
    font-size: 24pt;
    color: #333;
    margin-bottom:40px;
`;

export const TextArea = styled.textarea`
    width: 100%;
`;

export const Button = styled.button`
    border: none;
    padding: 10px 20px;
    font-size: 15pt;
    color: white;
    width: 100%;
    background-color:#34495e;
    margin: 20px auto;
`;

export const DivCentered = styled.div`
    text-align:center;
    margin-top:50px;
`;