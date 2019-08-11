import React from 'react';
import {Background, Container, Title, InputContainer, Input, Textarea, Button} from './styles';

function Contact(props){
    return(
        <Background id={props.id}>
            <Container>
                <Title>Entre em contato:</Title>

                <InputContainer first={true}>
                    <Input placeholder="Nome" type="text" />
                </InputContainer>

                <InputContainer>
                    <Input placeholder="E-mail" type="text" />
                </InputContainer>

                <InputContainer>
                    <Textarea rows={7} placeholder="Mensagem" />
                </InputContainer>

                <InputContainer>
                    <Button onClick={()=>{alert('Enviado!')}}>Enviar</Button>
                </InputContainer>
            </Container>
        </Background>
    );
}

export default Contact;