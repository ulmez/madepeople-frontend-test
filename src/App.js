import React, { Component } from 'react';
import HeaderPage from './components/header/HeaderPage';
import MainPage from './components/main/MainPage';
import OptionBarPage from './components/optionBar/OptionBarPage';
import SocialMediaPage from './components/socialMedia/SocialMediaPage';
import AboutUsPage from './components/aboutUs/AboutUsPage';
import FooterPage from './components/footer/FooterPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false
    };

    this.unCheckMenu = this.unCheckMenu.bind(this);
  }

  unCheckMenu(e) {
    if(
      (e.target.parentNode.id === "menuHeadlineContainer" ||
      ((e.target.parentNode).parentNode).parentNode.id === "menuMainContainer" ||
      e.target.parentNode.id === "menuMainContainer" ||
      e.target.parentNode.id === "topSearchField" ||
      (e.target.parentNode).parentNode.id === "topSearchField") &&
      (e.target.id !== "accessories" && e.target.id !== "ourWorld")
    ) {
      this.setState({
        activeMenu: true
      });
    }
    else {
      const searchBoxTextField = document.getElementById("searchBoxTextField");
      searchBoxTextField.value = "";
      
      this.setState({
        activeMenu: false
      });
    }
  }

  render() {
    return (
      <div onClick={this.unCheckMenu}>
        <HeaderPage activeMenu={this.state.activeMenu} />
        <MainPage />
        <OptionBarPage />
        <SocialMediaPage />
        <AboutUsPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
