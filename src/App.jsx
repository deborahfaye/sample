import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Body from './components/body.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
    
      <Body />

      <Footer />

      </div>

    );
  }
}

export default App;
