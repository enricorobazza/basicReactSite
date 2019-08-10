import React, {useState, useEffect} from 'react';
import {Container, LeftMenu, RightMenu, MenuOption, Logo, MenuIcon, MenuIconLink, DropMenu, DropMenuOption, TopMenu} from './styles.js';
import {screenSizes} from '../../settings';
import {Motion, spring} from 'react-motion';

function Header() {

    //const [itens, setItens] = useState([]);

    const [width, setWidth] = useState(window.innerWidth);
    const [menuDroped, setMenuDroped] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if(window.innerWidth > screenSizes.small) setMenuDroped(false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    });

    const itens = [
        "SALÃO GERAL",
        "BRINQUEDOS",
        "RECREAÇÃO",
        "GASTRONOMIA",
        "SERVIÇOS",
        "MAPA LOCAL",
        "CONTATO"
    ];

    function menuIconClick(e){
        e.preventDefault();
        setMenuDroped(!menuDroped);
    }

    return(
        <>
            <Container>
                <TopMenu>
                    <LeftMenu><Logo src="https://i2.wp.com/www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/03/cropped-apenas-cuco2-copy.png" /></LeftMenu>
                    <RightMenu>
                        {
                            itens.map((item) => {
                                if(width > screenSizes.small)
                                return (
                                    <MenuOption href={"#"+item} key={item}>{item}</MenuOption>
                                );
                                else return (<></>);
                            })

                        }
                        {width < screenSizes.small && <MenuIconLink onClick={menuIconClick} href="#"><MenuIcon /></MenuIconLink>}
                        
                    </RightMenu>
                </TopMenu>
                
                {menuDroped && 
                    <Motion defaultStyle={{marginTop: 0, opacity:0}} style={{marginTop: spring(60), opacity: spring(100)}}>
                        {(style)=>(
                            <DropMenu style={{height: `${style.marginTop}vh`, opacity: style.opacity}}> 
                            {
                                itens.map((item) => {
                                    return (
                                        <DropMenuOption href={"#"+item} key={item}>{item}</DropMenuOption>
                                    );
                                })
                            }
                            </DropMenu>
                        )}
                    </Motion>
                }
            </Container>


           
            
        </>
    );
}

export default Header;