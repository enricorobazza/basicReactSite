import React, {useState, useEffect} from 'react';
import {Background, Container, Title, TextArea, Button} from './styles';

function SectionsAdd(props){
    const [section, setSection] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                let response = await fetch('https://cucomalukonode.herokuapp.com/sections/'+props.sectionId, {method: 'GET'});
                let responseJson = await response.json();
                setSection(responseJson);
            }
            catch(err){
                throw err;
            }
        }
        fetchData();
    }, [props.sectionId]);

    return(
        <>
            <Background>
                <Container>
                    <Title>{section.title}</Title><br /><br />
                    <form enctype="multipart/form-data" method="post" action={"https://cucomalukonode.herokuapp.com/sections/cuco/" + props.sectionId}>
                        Texto: <br /> <TextArea cols={25} rows={5} name="text"/><br /><br />
                        Imagens: <br /> <input type="file" name="images" multiple/> <br /><br />
                        <div style={{'text-align':'center'}}><Button type="submit">Enviar</Button></div>
                    </form>
                </Container>
            </Background>
        </>
    );
}

export default SectionsAdd;