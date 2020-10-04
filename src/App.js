import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Container from './components/Container';
import './assets/scss/App.scss';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
};

export default App;
