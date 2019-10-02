import React from 'react';
import { createGlobalStyle } from "styled-components";
import WidthStoreContext  from './stores/WidthStore';
import useWindowWidth from 'use-window-width';
import Routes from './routes';

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
        <Routes />
      </WidthStoreContext.Provider>
    </>
  );
}

export default App;