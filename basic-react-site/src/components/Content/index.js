import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Section from '../Section';

function Content(){

    const [sections, setSections] = useState([]);
    useEffect(()=>{
        setSections([
            {
                title:"Salão Geral",
                text: "O Buffet Estação Cuco Maluko está situado em um espaço único. O salão é uma linda construção histórica tombada pelo patrimônio de São Carlos. O espaço interno, térreo e climatizado, é o encontro do rústico com o moderno e, de forma integrada, acomoda até 150 convidados. A área externa possui um amplo jardim, com estacionamento fechado e espaço reservado para as crianças.",
                images: ["http://www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/08/sala%CC%83o-geral.4.jpeg"],
                color: 'darkblue'
            },
            {
                title:"Salão Geral",
                text: "O Buffet Estação Cuco Maluko está situado em um espaço único. O salão é uma linda construção histórica tombada pelo patrimônio de São Carlos. O espaço interno, térreo e climatizado, é o encontro do rústico com o moderno e, de forma integrada, acomoda até 150 convidados. A área externa possui um amplo jardim, com estacionamento fechado e espaço reservado para as crianças.",
                images: ["http://www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/08/sala%CC%83o-geral.4.jpeg"],
                color: 'darkpink'
            },
            {
                title:"Salão Geral",
                text: "O Buffet Estação Cuco Maluko está situado em um espaço único. O salão é uma linda construção histórica tombada pelo patrimônio de São Carlos. O espaço interno, térreo e climatizado, é o encontro do rústico com o moderno e, de forma integrada, acomoda até 150 convidados. A área externa possui um amplo jardim, com estacionamento fechado e espaço reservado para as crianças.",
                images: ["http://www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/08/sala%CC%83o-geral.4.jpeg"],
                color: 'darkred'
            },
            {
                title:"Salão Geral",
                text: "O Buffet Estação Cuco Maluko está situado em um espaço único. O salão é uma linda construção histórica tombada pelo patrimônio de São Carlos. O espaço interno, térreo e climatizado, é o encontro do rústico com o moderno e, de forma integrada, acomoda até 150 convidados. A área externa possui um amplo jardim, com estacionamento fechado e espaço reservado para as crianças.",
                images: ["http://www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/08/sala%CC%83o-geral.4.jpeg"],
                color: 'darkgreen'
            },

        ]);
    }, []);

    const PageTitle = styled.h1`
        color: darkblue;
        margin-top:100px;
    `;

    return(
        <div style={{padding: 18}}>
            <PageTitle>Estação Cuco Maluko</PageTitle>
            {sections.map((section, index) => {
                return (
                    <Section left={index % 2 === 0} section={section}></Section>
                )
            })}
        </div>
    );
}

export default Content;