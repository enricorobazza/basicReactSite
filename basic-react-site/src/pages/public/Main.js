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

    function groupImages(json){
        var dict = {};
        var newJson = [];
        json.forEach((element, index) => {
            if(dict[element.id] == undefined){
                dict[element.id] = newJson.length;
                var images = element.image ? [element.image] : [];
                newJson.push({
                    id: element.id,
                    title: element.title, 
                    text: element.text, 
                    branch: element.branch, 
                    images
                });
            }
            else newJson[dict[element.id]].images.push(element.image);
        });
        return newJson;
    }


    const test = () => {
        var array = [
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images217-1570017900779.jpg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images326-1570017900631.jpg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images351-1570017899104.jpg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images358-1570017899592.jpeg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images510-1570017899761.jpg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images643-1570017898957.jpg"
            },
            {
              "id": 1,
              "title": "Salão Geral",
              "text": "O Buffet Cuco Maluko está situado em um salão amplo e térreo, totalmente integrado e climatizado. O espaço, aconchegante e alegre, acomoda até 150 convidados e conta com área reservada para mamães e bebês, para trocas e amamentação, além de sala de games e hall de café.",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images756-1570017896923.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images296-1570018047300.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images339-1570018049144.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images355-1570018047977.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images443-1570018047509.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images454-1570018044214.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images548-1570018044594.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images554-1570018046215.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images633-1570018048499.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images783-1570018047157.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images942-1570018050240.jpg"
            },
            {
              "id": 2,
              "title": "Brinquedos",
              "text": "No Cuco Maluko as opções de diversão são variadas e para todas as idades. Para aqueles que curtem esportes, podem jogar futebol no campinho, fazer arremessos na arena de basquete ou até mesmo usufruir da parede de escalada. Para quem adora uma diversão com friozinho na barriga, temos o Rocker 360 e o mini barco vicking. Ainda oferecemos a área baby e o carrossel para os pequenos, piscina de bolinhas, cama elástica, kiddie Play, tobogã duplo, escorregador espiral, air game, tombo legal, além dos games e da pista de dança completa para transformar a baladinha em uma grande diversão!",
              "branch": "cuco",
              "image": "http://cucomaluko.com.br/react/public/uploads/images971-1570018051180.jpg"
            },
            {
              "id": 3,
              "title": "Recreação",
              "text": "alo alo",
              "branch": "cuco",
              "image": null
            },
            {
              "id": 4,
              "title": "Gastronomia",
              "text": "",
              "branch": "cuco",
              "image": null
            },
            {
              "id": 5,
              "title": "Estacionamento",
              "text": "",
              "branch": "cuco",
              "image": null
            },
            {
              "id": 6,
              "title": "Serviços",
              "text": "",
              "branch": "cuco",
              "image": null
            }
          ];
          groupImages(array);
    }

    test();

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