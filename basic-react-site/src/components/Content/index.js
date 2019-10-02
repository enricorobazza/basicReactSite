import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Contact from '../Contact';
import {screenSizes} from '../../settings';
// import { sectionsData } from '../../data/sections';

function Content(props){

    const [sections, setSections] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                let response = await fetch('https://cucomalukonode.herokuapp.com/sections/'+props.op, {method: 'GET'});
                let responseJson = await response.json();
                setSections(responseJson);
            }
            catch(err){
                throw err;
            }
        }
        fetchData();
    }, [props.op]);

    const PageTitle = styled.h1`
        color: #444;
        margin-top:100px;
        padding-left: 18px;
        font-weight: 300;
        font-size: 35px;
    `;

    const Box = styled.div`
        flex:1;
        paddding:0;
    `;

    const Frame = styled.iframe`
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

    return(
        <div>
            <PageTitle>{props.op === "estacao" ? "Estação Cuco Maluko" : "Cuco Maluko"}</PageTitle>
            {sections.map((section, index) => {
                return (
                    <Section id={index+1} left={index % 2 === 0} section={section}></Section>
                )
            })}
            <Box><Frame src={" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.7260455712476!2d-47.9008626854753!3d-22.02180548546892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87739480d7b39%3A0x4137cad7a1057291!2zRXN0YcOnw6NvIEN1Y28gTWFsdWtv!5e0!3m2!1spt-BR!2sbr!4v1511289889849"} frameborder="0" allowfullscreen="allowfullscreen"></Frame></Box>
            <Contact id={sections.length + 1} />
        </div>
    );
}

export default Content;