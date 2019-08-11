import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Contact from '../Contact';
import { sectionsData } from '../../data/sections';

function Content(){

    const [sections, setSections] = useState([]);
    useEffect(()=>{
        setSections(sectionsData);
    }, []);

    const PageTitle = styled.h1`
        color: #444;
        margin-top:100px;
        padding-left: 18px;
        font-weight: 300;
        font-size: 35px;
    `;

    return(
        <div>
            <PageTitle>Estação Cuco Maluko</PageTitle>
            {sections.map((section, index) => {
                return (
                    <Section id={index+1} left={index % 2 === 0} section={section}></Section>
                )
            })}
            <Contact id={sections.length + 1} />
        </div>
    );
}

export default Content;