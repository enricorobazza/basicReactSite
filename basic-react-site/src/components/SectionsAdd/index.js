import React, {useState, useEffect} from 'react';
import {Background, Container, Title, TextArea, Button, DivCentered} from './styles';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function SectionsAdd(props){
    const [section, setSection] = useState([]);
    const [text, setText] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        axios.get('https://cucomalukonode.herokuapp.com/sections/'+props.sectionId).then(res => {
            setSection(res.data);
        }).catch(err=>{console.log(err)});
    }, [props.sectionId]);

    return(
        <>
            <Background>
                <Container>
                    <Title>{section.title}</Title><br /><br />
                    <form>
                        Texto: <br /> <TextArea cols={25} rows={5} name="text" onChange={event=>{setText(event.target.value)}}/><br /><br />
                        Imagens: <br /> <input type="file" name="images" onChange={event=>{setImages(event.target.files)}} multiple/> <br /><br />
                        <div style={{'textAlign':'center'}}><Button type="submit" onClick={event=>{
                            event.preventDefault();
                            const data = new FormData();
                            data.append('text', text);
                            for(var i=0;i<images.length;i++){
                                data.append('images', images[i]);
                            }
                            setLoading(true);
                            (props.sectionId ? axios.put : axios.post).call("", "https://cucomalukonode.herokuapp.com/sections/cuco/" + props.sectionId, data).then(res=>{
                                setLoading(false);
                                window.location = process.env.PUBLIC_URL+'/admin';
                            })
                            
                        }}>{loading ? "Carregando..." : "Enviar"}</Button></div>
                    </form>
                    {loading && <DivCentered><img height="120px" alt="loading" src={process.env.PUBLIC_URL+"/loading.gif"}/></DivCentered>}
                </Container>
            </Background>
        </>
    );
}

export default SectionsAdd;