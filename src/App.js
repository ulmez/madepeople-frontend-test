import React, { Component } from 'react';
import HeaderPage from './components/header/HeaderPage';
import MainPage from './components/main/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <MainPage />
      </div>
    );
  }
}

export default App;
