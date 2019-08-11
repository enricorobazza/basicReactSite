import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { createGlobalStyle } from "styled-components";
import WidthStoreContext  from './stores/WidthStore';
import useWindowWidth from 'use-window-width';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`;

const App = ()=>{
  const width = useWindowWidth();
  return (
    <>
      <GlobalStyles/>
      <WidthStoreContext.Provider value={width}>
        <Header></Header>
        <Content></Content>
      </WidthStoreContext.Provider>
    </>
  );
}

export default App;