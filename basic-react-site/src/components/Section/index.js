import React, {useContext, useState} from 'react';
import WidthStoreContext from '../../stores/WidthStore';
import { screenSizes } from '../../settings';
import { Container, Box, BoxText, Image, Frame, Title, Text } from './styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Section(props){
    const width = useContext(WidthStoreContext);
    const {section} = props;
    const [sliderIndex, setSliderIndex] = useState(0);

    function renderSlider(images){
        setTimeout(()=>{
            if(sliderIndex >= images.length - 1) setSliderIndex(0);
            else setSliderIndex(sliderIndex+1);
        }, 4000);
        return(
            <Box>
                <AwesomeSlider selected={sliderIndex} bullets={false}>
                {
                    images.map((image)=>{
                        return(<div data-src={image} />)
                    })
                }
                </AwesomeSlider>
            </Box>
        )
    }

    function renderImageOrMap(section){
        if(section.images){ 
            if(section.images.length > 1) return renderSlider(section.images);
            else return(<Box><Image src={section.images[0]} /></Box>);
        }
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