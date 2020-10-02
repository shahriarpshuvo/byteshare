import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './assets/scss/App.scss';

import { testApi } from './config/api';

const App = () => {
  const [testData, setTestData] = useState('data');
  useEffect(() => {
    testApi().then(data => setTestData(data));
  }, []);
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>{testData}</div>
    </>
  );
};

export default App;
