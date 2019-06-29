import React, { Component } from 'react';
import HeaderPage from './components/header/HeaderPage';
import MainPage from './components/main/MainPage';
import OptionBarPage from './components/optionBar/OptionBarPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <MainPage />
        <OptionBarPage />
      </div>
    );
  }
}

export default App;
