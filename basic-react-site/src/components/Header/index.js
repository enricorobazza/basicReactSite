import React, {} from 'react';
import {Container, LeftMenu, RightMenu, MenuOption, Logo} from './styles.js';

function Header() {

    //const [itens, setItens] = useState([]);

    const itens = [
        "SALÃO GERAL",
        "BRINQUEDOS",
        "RECREAÇÃO",
        "GASTRONOMIA",
        "SERVIÇOS",
        "MAPA LOCAL",
        "CONTATO"
    ];

    return(
        <>
            <Container>
                <LeftMenu><Logo src="https://i2.wp.com/www.cucomaluko.com.br/wordpress/wp-content/uploads/2019/03/cropped-apenas-cuco2-copy.png" /></LeftMenu>
                <RightMenu>
                    {
                        itens.map((item) => {
                            return (
                                <MenuOption href={"#"+item} key={item}>{item}</MenuOption>
                            );
                        })

                    }
                </RightMenu>
            </Container>
        </>
    );
}

export default Header;