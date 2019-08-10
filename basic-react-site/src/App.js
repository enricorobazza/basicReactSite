import React, {useEffect} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import {observable, action, decorate} from 'mobx';
// import {screenSizes} from './settings';

import { createGlobalStyle } from "styled-components";
import { width } from '@material-ui/system';
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`;

class Store {
  width = window.innerWidth;

  setWidth = () => {
    this.width = window.innerWidth;
  }
}

decorate(Store, {
  width: observable,
  setWidth: action
})

const store = new Store();

function App() {

  useEffect(() => {
    const handleResize = () => {
        store.setWidth();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
});
  
  return (
    <>
      <GlobalStyles/>
      <Header></Header>
      <Content></Content>
    </>
  );
}

export default App;
