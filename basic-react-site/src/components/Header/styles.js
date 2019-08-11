import styled from 'styled-components';
import { Menu } from '@material-ui/icons';
import { screenSizes } from './../../settings';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position:fixed;
    top:0;
    left: 0;
    width:100%;
    box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    font-weight: 400;
    font-size: 12px;
    z-index:10;
`;

export const TopMenu = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    padding: 10px 0;
    z-index:5;
`;

const MenuWrapper = styled.div`
    margin: 0 80px;

    @media(max-width:${screenSizes.large}px){
        margin: 0 20px;
    }

    @media(max-width:${screenSizes.medium}px){
        margin: 0 10px;
    }
`;

export const LeftMenu = styled(MenuWrapper)`
    flex:1;
    backgroud-color: green;
`;

export const RightMenu = styled(MenuWrapper)`
    flex:2;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width:${screenSizes.medium}px){
        justify-content: flex-end;
    }
`;

const noLinkStyle = styled.a`
    text-decoration:none;
    color: black;
    cursor:pointer;

    &:hover{
        color: #3e62a8;
    }
`;

export const MenuOption = styled(noLinkStyle)`
    // padding: 10px 20px;
    position:relative;
    white-space: nowrap;

    @media(max-width:${screenSizes.large}px){
        padding: 10px 5px;
    }
`;

export const MenuIconLink = styled(noLinkStyle)``;

export const MenuIcon = styled(Menu)`
    &&{
        font-size: 20pt;
    }
`;

export const Logo = styled.img`
    height: 50px;
`;

export const DropMenu = styled.div`
    flex:1;
    display:flex;
    height: 60vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index:1;
`;

export const DropMenuOption = styled(noLinkStyle)`
    flex:1;
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    background-color: white;
    border-top: 1px solid #ccc;
`;