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
`;

export const Table = styled.table`
    margin-top:30px;
    width: 100%;
    background-color:#fff;
    border-collapse: collapse;
`;

export const TdTitle = styled.td`
    border: 1px solid black;
    padding: 5px;
`;

export const TdEditar = styled.td`
    border: 1px solid black;
    padding: 5px;
    max-width: 20px;
    text-align:center;
`;

export const Select = styled.select`
    border: none;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 19pt;
`;

export const DivCentered = styled.div`
    text-align:center;
    margin-top:100px;
`;