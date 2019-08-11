import React, {useState, useEffect, useContext} from 'react';
import {Container, LeftMenu, RightMenu, MenuOption, Logo, MenuIcon, MenuIconLink, DropMenu, DropMenuOption, TopMenu} from './styles.js';
import {screenSizes} from '../../settings';
import {Motion, spring} from 'react-motion';
import WidthStoreContext from '../../stores/WidthStore';
import { Link } from "react-scroll";

const Header = ()=>{
    const width = useContext(WidthStoreContext);
    const [menuDroped, setMenuDroped] = useState(false);

    useEffect(()=>{
        if(width >= screenSizes.medium) setMenuDroped(false);
    }, [width])

    const itens = [
        "SALÃO GERAL",
        "BRINQUEDOS",
        "RECREAÇÃO",
        "GASTRONOMIA",
        "ESTACIONAMENTO",
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
                            itens.map((item, index) => {
                                if(width >= screenSizes.medium)
                                return (
                                    <MenuOption>
                                        <Link
                                            style={
                                                {padding:"10px 20px"}
                                            }
                                            activeClass="active"
                                            to={index+1}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                            key={index}
                                        >
                                            {item}
                                        </Link>
                                    </MenuOption>
                                );
                                else return (<></>);
                            })

                        }
                        {width < screenSizes.medium && <MenuIconLink onClick={menuIconClick} href="#"><MenuIcon /></MenuIconLink>}
                        
                    </RightMenu>
                </TopMenu>
                
                {menuDroped && 
                    <Motion defaultStyle={{marginTop: 0, opacity:0}} style={{marginTop: spring(60), opacity: spring(100)}}>
                        {(style)=>(
                            <DropMenu style={{height: `${style.marginTop}vh`, opacity: style.opacity}}> 
                            {
                                itens.map((item, index) => {
                                    return (
                                        <DropMenuOption>
                                            <Link
                                                style={{width:"100%", textAlign:'center'}}
                                                activeClass="active"
                                                to={index+1}
                                                smooth={true}
                                                offset={-70}
                                                duration= {500}
                                                key={index}
                                                onClick={()=>{setMenuDroped(false)}}
                                            >{item}</Link>
                                        </DropMenuOption>
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