import React, {useEffect, useState} from 'react';
import {
    Background,
    Container,
    Title,
    Table,
    TdTitle,
    TdEditar,
    Select,
    DivCentered
} from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SectionsList(){

    const [sections, setSections] = useState([]);
    const [op, setOp] = useState('cuco');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setSections([]);
        axios.get('https://cucomalukonode.herokuapp.com/sections/'+op).then(res => {
            setLoading(false);
            setSections(res.data);
        }).catch(err=>{console.log(err)});
    }, [op]);

    return(
        <>
            <Background>
                
                <Container>
                    <Title>Seções:</Title>
                    <Select onChange={(event)=>{setOp(event.target.value);}}>
                        <option value="cuco">Cuco Maluko</option>
                        <option value="estacao">Estação Cuco Maluko</option>
                    </Select>
                        { loading && <DivCentered><img height="120px" alt="loading" src={process.env.PUBLIC_URL+"/loading.gif"}/></DivCentered> }
                    <Table>
                        {
                            sections.map((section) => {
                                return(<tr>
                                    <TdTitle>{section.title}</TdTitle>
                                    <TdEditar><Link to={"admin/"+section.id}>Editar</Link></TdEditar>
                                </tr>);
                            })
                        }
                    </Table>
                </Container>
            </Background>
        </>
    );
}

export default SectionsList;