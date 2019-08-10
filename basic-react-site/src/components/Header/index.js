import React, {useState, useEffect} from 'react';
import {Container, LeftMenu, RightMenu, MenuOption, Logo, MenuIcon, MenuIconLink, DropMenu, DropMenuOption, TopMenu} from './styles.js';
import {screenSizes} from '../../settings';

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
                    <DropMenu> 
                        {
                            itens.map((item) => {
                                return (
                                    <DropMenuOption href={"#"+item} key={item}>{item}</DropMenuOption>
                                );
                            })
                        }
                    </DropMenu>
                }
            </Container>


           
            
        </>
    );
}

export default Header;