import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    position:fixed;
    width:100%;
    box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    font-weight: 400;
    font-size: 12px;
    padding: 10px 0;
`;

const MenuWrapper = styled.div`
    margin: 0 80px;

    @media(max-width:1100px){
        margin: 0 40px;
    }

    @media(max-width:800px){
        margin: 0 20px;
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
`;

export const MenuOption = styled.a`
    padding: 10px 20px;
    position:relative;
    white-space: nowrap;
    text-decoration:none;
    color: black;

    &:hover{
        color: #3e62a8;
    }

    @media(max-width:1100px){
        padding: 10px 5px;
    }
`;

export const Logo = styled.img`
    height: 50px;
`;