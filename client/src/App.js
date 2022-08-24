import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './components/common/GlobalStyles';
import Home from './components/Home';
import Header from './components/Header/Header';
import Register from './components/Register';
import Login from './components/Login';
import Lists from './components/Lists';
import CreateCommunity from './components/MainContents/CreateCommunity';
import DetailCommunity from './components/Community/Detail/DetailCommunity';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/createCommunity' element={<CreateCommunity />} />
            {/* <Route path='/r/:communityTitle' element={<DetailCommunity />} /> 
            이런식으로 할 에정*/}
            <Route path='/r/communityTitle' element={<DetailCommunity />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
