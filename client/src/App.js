import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './components/common/GlobalStyles';
import Home from './components/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
