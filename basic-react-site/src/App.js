import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  
  return (
    <>
      <GlobalStyles/>
      <Header></Header>
      <Content></Content>
    </>
  );
}

export default App;
