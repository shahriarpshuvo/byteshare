import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadArea from './components/UploadArea';
import Container from './components/Container';
import './assets/scss/App.scss';

const App = () => {

  return (
    <>
      <Container>
        <Header />
        <Hero />
        <UploadArea />
      </Container>
    </>
  );
};

export default App;