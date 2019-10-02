import React, {useEffect, useState} from 'react';
import {
    Background,
    Container,
    Title,
    Table,
    TdTitle,
    TdEditar,
    Select
} from './styles';
import { Link } from 'react-router-dom';

function SectionsList(){

    const [sections, setSections] = useState([]);
    const [op, setOp] = useState('cuco');
    useEffect(()=>{
        async function fetchData(){
            try{
                let response = await fetch('https://cucomalukonode.herokuapp.com/sections/'+op, {method: 'GET'});
                let responseJson = await response.json();
                // console.log(responseJson);
                setSections(responseJson);
            }
            catch(err){
                throw err;
            }
        }
        fetchData();
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
                    <Table>
                        {
                            sections.map((section) => {
                                return(<tr>
                                    <TdTitle>{section.title}</TdTitle>
                                    <TdEditar><Link to={'admin/'+section.id}>Editar</Link></TdEditar>
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