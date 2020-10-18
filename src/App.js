import React from 'react';
import { ToastContainer } from 'react-toastify';

import './assets/scss/App.scss';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
