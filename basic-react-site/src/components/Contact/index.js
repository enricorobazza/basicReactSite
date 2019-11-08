import React, {useState} from 'react';
import {Background, Container, Title, InputContainer, Input, Textarea, Button, MessageOK, MessageERROR, Message} from './styles';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

function Contact(props){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [toSend, setToSend] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    return(
        <Background id={props.id}>
            <Container>
                <Title>Entre em contato:</Title>

                <InputContainer first={true}>
                    <Input placeholder="Nome" type="text" onChange={(e) => setName(e.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <Input placeholder="E-mail" type="text" onChange={(e) => setEmail(e.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <Textarea rows={7} placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <Button onClick={()=>{
                        setToSend(true);
                        setLoading(false);
                        setError(false);
                        setSent(false);
                    }}>Enviar</Button>
                </InputContainer>

                {toSend && <InputContainer><ReCAPTCHA
                        sitekey="6LdkrcEUAAAAACAnrY1WiAMMatPz-VN-nPW-COtC"
                        onChange={e=>{
                            if(e){
                                setLoading(true);
                                axios.post('https://cucomalukonode.herokuapp.com/email/', {name, email, message, op: props.op}).then(res=>{
                                    setLoading(false);
                                    setToSend(false);
                                    setSent(true);
                                }).catch(err=>{
                                    setLoading(false);
                                    setError(true);
                                    setToSend(false);
                                })
                            }
                            else{
                                setLoading(false);
                                setError(true);
                            }
                        }}
                /></InputContainer>}

                {loading && <Message> Enviando... </Message>}
                {sent && <MessageOK> Enviado com sucesso! </MessageOK>}
                {error && <MessageERROR> Erro ao enviar mensagem. </MessageERROR>}
            </Container>
        </Background>
    );
}

export default Contact;