import React, { Component } from 'react';
import HeaderPage from './components/header/HeaderPage';
import MainPage from './components/main/MainPage';
import OptionBarPage from './components/optionBar/OptionBarPage';
import SocialMediaPage from './components/socialMedia/SocialMediaPage';
import AboutUsPage from './components/aboutUs/AboutUsPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <MainPage />
        <OptionBarPage />
        <SocialMediaPage />
        <AboutUsPage />
      </div>
    );
  }
}

export default App;
