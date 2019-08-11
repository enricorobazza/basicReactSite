import React, {useContext} from 'react';
import WidthStoreContext from '../../stores/WidthStore';
import { screenSizes } from '../../settings';
import { Container, Box, BoxText, Image, Frame, Title, Text } from './styles';

function Section(props){
    const width = useContext(WidthStoreContext);
    const {section} = props;

    function renderImageOrMap(section){
        if(section.images) return(<Box><Image src={section.images[0]} /></Box>);
        else if(section.map) return(<Box><Frame src={section.map} frameborder="0" allowfullscreen="allowfullscreen"></Frame></Box>);
        else return(<></>);
    }

    const renderFirst = !props.left || width < screenSizes.xsmall;
    return(
        <>
            <Container id={props.id} color={section.color}>
                { renderFirst && renderImageOrMap(section) }
                <Box>
                    <BoxText>
                        <Title>{section.title}</Title>
                        <Text>{section.text}</Text>
                    </BoxText>
                </Box>
                { !renderFirst && renderImageOrMap(section) }
            </Container>
        </>
    );
}

export default Section;