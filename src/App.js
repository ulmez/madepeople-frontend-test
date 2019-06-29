import React, { Component } from 'react';
import HeaderPage from './components/header/HeaderPage';
import MainPage from './components/main/MainPage';
import OptionBarPage from './components/optionBar/OptionBarPage';
import SocialMediaPage from './components/socialMedia/SocialMediaPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <MainPage />
        <OptionBarPage />
        <SocialMediaPage />
      </div>
    );
  }
}

export default App;
