import React, { useEffect, useState } from 'react';

import './assets/scss/App.scss';
import { getFile, sendMail } from './config/api';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => {
  const [fileInfo, setFileInfo] = useState('');

  useEffect(() => {
    const apiCall = async () => {
      const data = await getFile('C9flX3Kl90');
      if (!data.error) setFileInfo(data);
    };
    //apiCall();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </>
  );
};

export default App;
