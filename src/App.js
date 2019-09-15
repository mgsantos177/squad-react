import React from 'react';
import './App.css';
import HeaderGeral from './componentes/Header/header';
import ContentContainer from './componentes/Content Container/main'
import Messenger from './componentes/Content Container/messenger'
import Menu from './componentes/Menu/main'


function App() {
  return (
    <div id="container" class="effect aside-float aside-bright mainnav-lg">
    <HeaderGeral />
    <ContentContainer />
    <Messenger/>
    <Menu />
    </div>
  );
}

export default App;
