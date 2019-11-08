import React, {useEffect, useState} from 'react';
import Section from '../Section';
import Contact from '../Contact';
import axios from 'axios';
import {PageTitle, Box, Frame, DivCentered} from './styles';
// import { sectionsData } from '../../data/sections';

function Content(props){

    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get('https://cucomalukonode.herokuapp.com/sections/'+props.op).then(res => {
            setLoading(false);
            setSections(res.data);
        }).catch(err => {console.log(err)});
    }, [props.op]);

    var map_url = props.op === "estacao" 
    ? 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.7260455712476!2d-47.9008626854753!3d-22.02180548546892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87739480d7b39%3A0x4137cad7a1057291!2zRXN0YcOnw6NvIEN1Y28gTWFsdWtv!5e0!3m2!1spt-BR!2sbr!4v1511289889849"
    :
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.705955135685!2d-47.902743449598844!3d-22.02257491238173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87738cc108763%3A0xa70583dea0d4625a!2sCuco%20Maluko%20Buffet%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1570036774525!5m2!1spt-BR!2sbr";

    return(
        <div>
            <PageTitle>{props.op === "estacao" ? "Estação Cuco Maluko" : "Cuco Maluko"}</PageTitle>
            { loading && <DivCentered><img height="120px" alt="loading" src={process.env.PUBLIC_URL+"/loading.gif"}/></DivCentered> }
            {sections.map((section, index) => {
                return (
                    <Section id={index+1} left={index % 2 === 0} section={section}></Section>
                )
            })}
            <Box><Frame src={map_url} frameborder="0" allowfullscreen="allowfullscreen"></Frame></Box>
            <Contact op={props.op} id={sections.length + 1} />
        </div>
    );
}

export default Content;