import React from 'react';
import styled from 'styled-components';
import fundo from '../../resources/images/plano_de_fundo.png';
import logoEstacao from '../../resources/images/logo_estacao.png';
import logoCuco from '../../resources/images/logo_cuco.png';
import { withRouter } from 'react-router-dom';

const Background = styled.div`
    width:100vw;
    height:100vh;
    background-image: url(${fundo});
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width:80vw;
    height:80vh;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
`;

const Option = styled.div`
    width: 500px
    height: 500px;
    text-align:center;
`;

const ImgContainer = styled.div`
    height: 370px;
    cursor:pointer;
`;

function MainComponent(props){

    return(
        <>
            <Background>
                <Container>
                    <Option>
                        <ImgContainer onClick={()=>{props.history.push(process.env.PUBLIC_URL+'/cuco-maluko')}}><img alt="Logo Cuco Maluko" src={logoCuco} /></ImgContainer>
                        <br />
                        Rua Dr. Duarte Nunes, nº 158, Vila Prado
                        CEP 13574-360, São Carlos/SP
                        Telefone: (16) 3415-2444
                        <br />
                        E-mail: <a href="contato@cucomaluko.com.br">contato@cucomaluko.com.br</a>
                        <br />
                    </Option>
                    <Option>
                        <ImgContainer onClick={()=>{props.history.push(process.env.PUBLIC_URL+'/estacao-cuco-maluko')}}><img alt="Logo Estação Cuco Maluko" src={logoEstacao} /></ImgContainer>
                        <br />
                        Rua General Osório, nº 38, Jardim São Carlos
                        CEP 13560-640, São Carlos/SP
                        Telefone: (16) 3415-6880
                        <br />
                        E-mail: <a href="estacao@cucomaluko.com.br">estacao@cucomaluko.com.br</a>
                        <br />
                    </Option>
                </Container>
            </Background>
        </>
    );
}


const Main = withRouter(MainComponent);
export default Main;